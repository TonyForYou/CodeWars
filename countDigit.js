// https://www.codewars.com/kata/566fc12495810954b1000030/solutions
function nbDig(n, d) {
    return [...Array(n+1).keys()].map((i) => {
      return i * i;
    })
    .join('')
    .split('')
    .filter((i) => {
      return i == d;
    }).length;
  }