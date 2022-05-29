https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
function countSheeps(arrayOfSheep) {
    let trueArray = arrayOfSheep.filter(word=> word == true)
    return trueArray.length
  }

// better solution... pretty much does the same
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }