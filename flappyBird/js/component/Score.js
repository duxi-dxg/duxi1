import config from "../../config.js";
import Basic from "./basic/Basic.js";

export default class Score extends Basic {
    constructor(ctx) {
        super(ctx)
        this.ctx = ctx;
        this.srcList = [
            "../../static/font_048.png",
            "../../static/font_049.png",
            "../../static/font_050.png",
            "../../static/font_051.png",
            "../../static/font_052.png",
            "../../static/font_053.png",
            "../../static/font_054.png",
            "../../static/font_055.png",
            "../../static/font_056.png",
            "../../static/font_057.png",

        ]
        this.imgList = this.srcList.map((src) => {
            let img = new Image();
            img.src = src;
            return img
        })
        this.width = 24;
        this.height = 44;
    }
    show(num) {
        this.num = Math.floor(num);
        if (this.num > 999 || this.num < 0) {
            return
        }
        let numList = (this.num + "").split("").map(str => str * 1)
        let length = numList.length;
        numList.forEach((num, index) => {
            this.ctx.drawImage(this.imgList[num], config.width - (length - index) * (this.width + 3), 0)
        });
    }
    render() {

    }
}