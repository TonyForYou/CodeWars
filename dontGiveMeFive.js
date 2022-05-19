// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
// P - (startNumber, endNumber)
// R - returns count of all the numbers except w/ 5 in it
// E - 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// P - pseudocode: 
//  take input to create array from x to y
//  use filter to filter out anything divisible by 5
//  return the length of that array
function dontGiveMeFive(start, end)
{
  let arr = []
  for(i=start; i<=end; i++){
      arr.push(i)
      console.log(arr)
  }
  return arr.filter(num=> num%5!=0).length;

}

// I wanted to use mod 5 = 0 to filter out values with 5 but that affects 10's. The better way is to use the does not include 5 logic.