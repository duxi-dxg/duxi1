//第二个场景
import Basic  from "./basic/Basic.js";
import config from "../../config.js";
export default class TitleReady extends Basic{
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        this.src = "../../static/text_ready.png";
        this.img = new Image();
        this.img.src = this.src;
        this.width = 178;
    }
    render() {
        this.ctx.drawImage(this.img, (config.width - this.width) / 2, 100);
    }
}