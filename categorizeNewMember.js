<<<<<<< HEAD
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

// how to read this?
=======
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

// how to read this?
>>>>>>> c3c174b31cbc61c2f7bd7cb56f3ffb28c0e1ee9a
// uses map() to make conditions for data's indices which are list of pairs. that's why is uses data.map instead of data - because we don't ONLY have values in an index. We have pairs. Study this ternary conditional.. it's useful