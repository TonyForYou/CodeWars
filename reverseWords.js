// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//   first you make str to array using split(' ')
// then you will have to split reverse join each word. Here we use map.