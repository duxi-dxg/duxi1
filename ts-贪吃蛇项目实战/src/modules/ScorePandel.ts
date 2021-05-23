//定义表示计分牌的类
class  ScorePandel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //设置一个变量表示等级
    maxLevel:number;
    //设置一个变量表示多少分的时候升级
    upScore:number;
    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel=maxLevel;
        this.upScore=upScore;
    }
    //设置一个加分的方法
    addScore(){
        //使分数自增
        this.scoreEle.innerHTML=++this.score+"";
        if(this.score % this.upScore ===0){
            this.levelUp();
        }
    }
    //提升等级的方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level+"";
        }
    }
}
//测试代码
const scorePandel= new ScorePandel();
// for(let i=0; i<100;i++){
//     scorePandel.addScore();
// }
export default ScorePandel;