// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// parameters, returns, examples, pseudocode
// params = array of integers
// returns = "odd" or "even"
// examples = look @ kata
// pseudocode => reduce the array to a sum. mod 2 of that sum

function oddOrEven(array){
    let result = array.reduce((sum,current)=>sum+current,0)
    if (result%2===0){
        return "even"
    }else{
        return "odd"
    }
}
// better solution:
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

//   ternary!! truthy result first. falsy result second