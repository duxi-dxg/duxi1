import Basic from "./basic/Basic.js";
import config from "../../config.js";
export default class TitleOver extends Basic {
    constructor(ctx) {
        super(ctx)
        this.ctx = ctx;
        this.src = "../../static/text_game_over.png";
        this.img = new Image();
        this.img.src = this.src;
        this.width = 204;
        // this.speed = -1;

    }
    render() {
        this.ctx.drawImage(this.img, (config.width - this.width) / 2, 100)
    }
}