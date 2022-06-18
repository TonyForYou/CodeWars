// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

//   this was fun.. I almost had it but I didn't know repeat() was a function. It was smart to use toUpperCase in the beginning. I was going to do it at the end.