// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// P - parameters are two strings. first is the string, second is the ending
// R - result is true if first arg ends with second arg
// E - ex: ('abc', 'bc') is true. ('abc','d') is false
// P - pseudocode:use str.endsWith(str2)
// 
function solution(str, ending){
    return str.endsWith(ending)
  }