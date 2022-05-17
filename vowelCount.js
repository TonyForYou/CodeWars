// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }  
    
    return vowelsCount;
  }
//   key is to know to use includes() and to build the vowels array.