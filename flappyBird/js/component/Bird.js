import Basic from "./basic/Basic.js"
import config from "../../config.js"
import tools from "../tools.js"
export default class Bird extends Basic {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        this.imgList = [];
        for (let i = 0; i < 3; i++) {
            let img = new Image();
            img.src = `../../static/bird2_${i}.png`;
            this.imgList.push(img);
        }
        this.step = 0;
        this.width = 48;
        this.height = 48;
        this.x = 50;
        this.y = 100;
        this.vy = 1;
        this.g = 0.1;
        this.registerFn = tools.debounce((e) => {
            this.jump()
        }, 500);
        this.dead = false;
        // setTimeout(() => {
        //     this.dead = true;
        // })
    }
    render() {
        this.update();
        this.ctx.drawImage(this.img, this.x, this.y);
    }
    jump() {
        this.vy = -3;
    }
    update() {
        let s = Math.floor(this.step++/ 3) % 3;
            this.img = this.imgList[s];

            // 速度修改 位置
            this.y += this.vy;
            if (this.y >= config.height - 150) {
                this.y = config.height - 150
                this.vy = 0
            }
            if (this.y <= -10) {
                this.y = -10
                this.vy = 0
            }
            // 重力加速度修改 速度
            this.vy += this.g;
        }
        register() {
            config.canvas.addEventListener("click", this.registerFn);
        }
        checkCollide(pipe) {
            //鸟的大小
            let birdSize = {
                x: this.x,
                y: this.y,
                w: this.width,
                h: this.height
            }
            let pipeInfo = {
                x: pipe.x,
                w: pipe.width,
                y: pipe.y,
                size: pipe.size
            }
            if (birdSize.x + birdSize.w < pipeInfo.x //鸟在柱子左边
                ||
                birdSize.x > pipeInfo.x + pipeInfo.w) //鸟在柱子右边
            {
                return false
            }
            if (birdSize.y > pipeInfo.y  //鸟撞不到上面
                && birdSize.y + birdSize.h < pipeInfo.y + pipeInfo.size) //鸟撞不到下面
           {
                return false
            }
            return true
        }

    }