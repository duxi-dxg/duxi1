import Ready from "./scene/Ready.js";
import Start from "./scene/Start.js";
import Gaming from "./scene/Gaming.js";
import GameOver from "./scene/GameOver.js";
//游戏场景的控制，负责场景的切换
export default class Scene {
    constructor(ctx) {
        this.ctx = ctx;
        this.status = 0;
        // this.gameOver = false;
        // this.sceneArr = ["start", "ready", "gaming", "dead"];
        this.sceneArr = [Start, Ready, Gaming, GameOver];
        // this.sceneList = {
        //     start: new Start(this.ctx), //游戏第一个场景
        //     ready: new Ready(this.ctx), //游戏第二个场景
        //     gaming: new Gaming(this.ctx), //游戏第三个场景
        // };
        this.stage = new this.sceneArr[this.status](this.ctx);
        this.stage.register();
    };

    //场景的渲染
    render() {
        //场景渲染状态的判断
        // if (this.sceneList[this.sceneArr[this.status]].next) {
        //     this.status++;
        // }
 
        if(this.stage.next){
            // 先把当前场景中的所有的元素注册过的事件全部取消掉
            this.stage.unregister();
            // 切换到下一个场景
            this.status++;
            this.stage = new this.sceneArr[this.status](this.ctx);
            this.stage.register();
        }
        //场景渲染
        // this.sceneList[this.sceneArr[this.status]].render()
        this.stage.render();
    };

}