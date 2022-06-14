// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/solutions

function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }