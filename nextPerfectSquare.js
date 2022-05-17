// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise return -1;
  if (Number.isInteger(Math.sqrt(sq)) && sq > 0){
    return ((Math.sqrt(sq))+1)**2
  }
  else{
    return -1
  }
}

// P - sq = single integer input
// R - returns integer or -1 if sq is perfect sq 
// E - example: sq = 16, findNextSquare(16) = 25; sq = 17, findNextSquare(17) = -1
// P - 1. check if sq is perfect square. if math.sqrt(sq).isInteger && sq>0
//     2. if perfect square, 
        //    return a. (math.sqrt(sq)+1)**2