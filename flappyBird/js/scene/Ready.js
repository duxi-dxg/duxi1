//第二个游戏场景
import TitleReady from "../component/TitleReady.js";
import Background from "../component/Background.js";
//游戏准备场景
export default class Ready {
    constructor(ctx) {
        this.ctx = ctx;
        this.titleReady = new TitleReady(ctx);
        this.bg = new Background(ctx);
        this.next = false;
        this.boxList = [
            this.bg,
            this.titleReady,
          ]
        setTimeout(()=>{
            this.next = true; 
        },3000)
    }
    render(){
        this.bg.render();
        this.titleReady.render();
    }
    register(){
        this.boxList.forEach(item => item.register())
    }
    unregister(){
        this.boxList.forEach(item => item.unregister())
    }
}