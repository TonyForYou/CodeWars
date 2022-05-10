// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// thoughts
// split(" ")
// Array.map(element=> element[i]=element[i].toUpper())
// join("")

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };

//   what to get from this - 
// we are using the object prototype to split the sentence into an array using " " as the delim. Then use map on that array just on the first element to uppercase the first letter. Then append (+) the rest using slice and join. 
// remember: slice returns a new array by copying in the desired range. Then at the end join that array together with " "