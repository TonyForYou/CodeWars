// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

// how to read this?
// uses map() to make conditions for data's indices which are list of pairs. that's why is uses data.map instead of data - because we don't ONLY have values in an index. We have pairs. Study this ternary conditional.. it's useful