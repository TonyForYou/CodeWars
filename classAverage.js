// function betterThanAverage(classPoints, yourPoints) {
//     average = (classPoints.reduce((sum, current) => sum+current,0))/classPoints.length
//     if (yourPoints > average){
//       return true
//     }
//     else {
//       false
//     }
//   }

// more concise:
function betterThanAverage(classPoints, yourPoints){
    return yourPoints > classPoints.reduce((a,b)=>a+b,0))/ classPoints.length
}
