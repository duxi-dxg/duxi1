import Snake from "./Snake";
import Food from "./Food";
import ScorePandel from "./ScorePandel";
//游戏控制器，控制其他的所以类；
class GameControl{
    //定义三个属性
    snake:Snake;
    food:Food;
    scorePandel:ScorePandel;
    direction:string="";
    //创建一个属性，用于记录游戏是否结束
    isLive=true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePandel = new ScorePandel(10,2);

        this.init();

    }
    //游戏初始化方法
    init(){
        //绑定键盘按键按下的事件
        document.addEventListener("keydown",this.keydownHandler.bind(this));
        //调用run方法，使蛇移动
        this.run();
    }
    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key;
        // console.log(event.key);
    }
    //创建一个控制蛇移动的方法
    run(){
        //根据方向（diretion)来使蛇的位置发生改变
        //向下 top减少，反之增加；
        //向左left减少，反之增加；
        let X=this.snake.X;
        let Y=this.snake.Y;
        //根据按键的方向修改X和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上移动top减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                //向下移动top减少
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                //向左移动top减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                //向右移动top减少
                X += 10;
                break;
            default:
                break;
        }
        //检查蛇是否吃到了食物;
        this.checkEat(X,Y)
        //修改蛇的X和Y值
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            alert(e.message+"宝贝下次加油鸭(●'◡'●)");
            this.isLive = false;
        }
        //开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePandel.level-1)*30);
    }
    //定义一个方法，检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if( X === this.food.X && Y === this.food.Y){
            //食物的位置进行重置
            this.food.change();
            //分数增加
            this.scorePandel.addScore();
            //蛇身体增加
            this.snake.addBody();
        }
    }
        
}
export default GameControl;