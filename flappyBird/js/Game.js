import Scene from "./Scene.js";
import config from "../config.js";
//游戏整体控制
export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.ctx = this.canvas.getContext("2d");
        

    }
    restart() {
        this.scene = new Scene(this.ctx);
        this.render();
    };
    render() {
        //调用渲染关键帧
        if(!this.scene.gameOver){
            requestAnimationFrame(() =>this.render());
            //清空模糊多余的部分
            this.ctx.clearRect(0, 0, config.width, config.height);
            this.scene.render();
        } 
    };
}