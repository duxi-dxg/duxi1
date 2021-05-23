class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;

    constructor(){
        //获取页面中的父元素并将起赋值给element
        this.element =document.getElementById("food")!;
    }
    //定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft;

    }
     //定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
        
    }
    //修改食物位置的方法
    change(){
        //生成一个随机的变量
        //食物位置最小是0，最大是290px
        //蛇移动一次是一格，一格就是10px,要求食物的位置是10的整倍数
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        //Math.floor(Math.random()*30)*10;
        this.element.style.left = left+"px";
        this.element.style.top = top+"px";
    }

} 
// 测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y)
export default Food;