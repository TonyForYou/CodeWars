<<<<<<< HEAD
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript
// remove the lowest value without sorting the array.
// just do the stuff to a new array?
// https://www.youtube.com/watch?v=WPTv6Vs6RTc

// grab lowest and grab the index
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // gets index of the smallest number while Math.min looks at all of numbers.
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

// https://stackoverflow.com/questions/9549780/what-does-this-symbol-mean-in-javascript
// what does ... mean? it is spread syntax. allows to accept a variable number of arguments and store them in an array
=======
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript
// remove the lowest value without sorting the array.
// just do the stuff to a new array?
// https://www.youtube.com/watch?v=WPTv6Vs6RTc

// grab lowest and grab the index
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // gets index of the smallest number while Math.min looks at all of numbers.
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

// https://stackoverflow.com/questions/9549780/what-does-this-symbol-mean-in-javascript
// what does ... mean? it is spread syntax. allows to accept a variable number of arguments and store them in an array
>>>>>>> c3c174b31cbc61c2f7bd7cb56f3ffb28c0e1ee9a
// key here was to know the indexOfMin and indexOf operators, then use slice to put things together.