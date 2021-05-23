class Snake{
    head:HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div")!;

    }
    //获取蛇的坐标（蛇头坐标）

    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value:number){
        //如果新值和旧值相同，则直接返回不再修改；
        if (this.X === value) {
            return 
        }
        //value值在0到290;
        if(value<0 || value>290){
            throw new Error("蛇撞墙了哦！")
        }
        //修改Y时，是在修改水平坐标，蛇在左右移动，禁止掉头；
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft=== value){
            if(value>this.X){
                //向右走，掉头应该向左走，故让他减10;
                value = this.X-10;
            }else{
                 //向左走，掉头应该向右走，故让他加10;
                 value = this.X+10;
            }
         }
        this.moveBody();
        this.head.style.left = value+"px";
        //检查有没有撞到自己
        this.checkHeadBody();
    }
    set Y(value:number){
         //如果新值和旧值相同，则直接返回不再修改； 
         if (this.Y === value) {
            return 
        }
        if(value<0 || value>290){
            throw new Error("蛇撞墙了！")
        }
        //修改Y时，是在修改垂直坐标，蛇在上下移动，禁止掉头；
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
           if(value>this.Y){
               //向下走，掉头应该向上走，故让他减10;
               value = this.Y-10;
           }else{
                //向上走，掉头应该向上走，故让他加10; 
                value = this.Y+10;
           }
        }
        this.moveBody();
        this.head.style.top = value+"px";
        //检查有没有撞到自己
        this.checkHeadBody();
    }
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");

    }
    moveBody(){
    //添加一个蛇移动的方法
    //将后边的身体设置为前一节身体的位置
    //遍历获取所有的身体
    for(let i=this.bodies.length-1;i>0;i--){
        //获取前面身体的位置
        // console.log("123");
        let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
        let Y=(this.bodies[i-1] as HTMLElement).offsetTop;
        //将值设置到当前身体上
        (this.bodies[i] as HTMLElement).style.left = X+"px";
        (this.bodies[i] as HTMLElement).style.top = Y+"px";
        } 
    }
    checkHeadBody(){
        //获取所有的身体，检查其是否和蛇头发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error();
                
            }
        }
    }
}
export default Snake;