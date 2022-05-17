<<<<<<< HEAD
function descendingOrder(n){
    //...use sort
    let arr =[n.toString().split("")]
    console.log(arr)
    arr.sort((a,b)=>b-a)
    console.log(arr)
    return number(arr.join(""))
  }

//   https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// better:
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
=======
function descendingOrder(n){
    //...use sort
    let arr =[n.toString().split("")]
    console.log(arr)
    arr.sort((a,b)=>b-a)
    console.log(arr)
    return number(arr.join(""))
  }

//   https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// better:
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
>>>>>>> c3c174b31cbc61c2f7bd7cb56f3ffb28c0e1ee9a
  }