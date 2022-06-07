function highAndLow(numbers){
  let arr = numbers.split(" ").sort((a,b)=>(a-b))
  return Math.max(...arr)+ " " + Math.min(...arr)
}