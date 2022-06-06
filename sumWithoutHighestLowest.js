// https://www.codewars.com/kata/576b93db1129fcf2200001e6/javascript

function sumArray(array)  {
    if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    }

    return 0
}
// you can remove first and last using only slice instead of slice and pop. honestly why is it so difficult to designate the first and last items of an array here.
// sort creates a new array, then you use reduce to find the sum.