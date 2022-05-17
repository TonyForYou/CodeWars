<<<<<<< HEAD
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0]
    }
  }
// alternate methods using the spread and math operator:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
//   Math.min takes a some numbers and return the smallest one. It does not take an array. So Math.min(1,2,3) works, while Math.min([1, 2, 3]), does not.

// The spread operator (...) takes an array and spreads it out over several arguments. So Math.min(...[1, 2, 3]) is the same as Math.min(1, 2, 3).

// Here is more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Hope it helps!
=======
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0]
    }
  }
// alternate methods using the spread and math operator:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
//   Math.min takes a some numbers and return the smallest one. It does not take an array. So Math.min(1,2,3) works, while Math.min([1, 2, 3]), does not.

// The spread operator (...) takes an array and spreads it out over several arguments. So Math.min(...[1, 2, 3]) is the same as Math.min(1, 2, 3).

// Here is more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Hope it helps!
>>>>>>> c3c174b31cbc61c2f7bd7cb56f3ffb28c0e1ee9a
