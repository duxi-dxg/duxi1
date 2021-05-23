
import config from "../../config.js";
import tools from "../tools.js";
import Basic from "./basic/Basic.js";
export default class Button extends Basic{
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        this.src = "../../static/button_play.png";
        this.img = new Image();
        this.img.src = this.src;
        this.width = 116;
        this.height = 70;
        this.x = (config.width - this.width) / 2,
        this.y = config.height / 4 * 3,
        this.next = false; //没有点击
        this.register();
        this.registerFn= (e) => {
            let point = {
                x: e.offsetX,
                y: e.offsetY,
            }
            let block = {
                x: this.x,
                y: this.y,
                w: this.width,
                h: this.height,
            }
            if(tools.pointInBlock(point,block)){
                this.next = true; //button已经被点击了
            }
        }

    }
    render() {
        this.ctx.drawImage(this.img, this.x, this.y);

    }
    //注册状态
    register() {
        config.canvas.addEventListener("click",this.registerFn);
    }
    unregister() {
        config.canvas.addEventListener("click",this.registerFn);
    }
}