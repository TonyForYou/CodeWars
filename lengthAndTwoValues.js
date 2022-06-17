// https://www.codewars.com/kata/62a611067274990047f431a8
function alternate(n, firstValue, secondValue){
    //params - array size
    // returns - array of repeated firstValue and secondValue
    // example - 5, true, false     -->  [true, false, true, false, true]
    // pseudo - while i<=n arr.push
    let arr = []
    let values = [firstValue, secondValue]
    let i = 0
    while (i<n){
        arr.push(values[i%2])
        i++
    }
    return arr
  }

//   more succinct:
function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;
  }