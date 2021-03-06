export default {
    /*
        @param point {x,y}
        @param block {x,y,w,h}

    */
    pointInBlock(point, block) {
       return  point.x >= block.x && point.x < block.x + block.w && point.y >= block.y && point.y < block.y + block.h
    },
    //防抖（一直点击小鸟运动）
    debounce(fn, delay){
        let flag = true;
        return function () {
          if(!flag) return
          flag = false
          fn()
          setTimeout(()=>{
            flag = true
          }, delay)
        }
      }
}
