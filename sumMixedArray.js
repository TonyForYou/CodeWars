function sumMix(x){
    let arr=x.map(Number)
    return arr.reduce((sum,current)=>sum+current,0)
  }
//   https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
// clever: make str to int using x.map(a=>+a)
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }