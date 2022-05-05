// given odd array. only one number will be different. find the different number.
function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

//   sort the array. compare first and next number. 

// or
// function stray(numbers){
//   for ( let num of numbers ){
//     if ( numbers.indexOf(num) === numbers.lastIndexOf(num) ){
//       return num
//     }
//   }
// }
const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]