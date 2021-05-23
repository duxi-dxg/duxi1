import Background from "../component/Background.js";
import Logo from "../component/Logo.js";
import Button from "../component/Button.js";
//游戏开始的场景
export default class Start {
    constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(this.ctx);
        this.lg = new Logo(this.ctx);
        this.btn = new Button(this.ctx);
        this.boxList = [
            this.bg,
            this.lg,
            this.btn
          ]
        this.next= false; //当前场景没结束
        this.register();
        
    }
    render(){
        //状态变更
        this.next = this.btn.next;
        //渲染
        this.bg.render();
        this.lg.render();
        this.btn.render();
    }
    register(){
        this.boxList.forEach(item => item.register())
    }
    unregister(){
        this.boxList.forEach(item => item.unregister())
    }
}