// function countPositivesSumNegatives(input) {
//     //create two new arrays by popping out to positive and negative array
//         let posArray=[]
//         let negArray=[]
//         for (let i = 0; i < input.length; i++) {
//           if (input[i]>0){
//             posArray[i] = input[i]
//           }
//           else if (input[i]<0){
//             negArray[i]=input[i]
//           }
//           else{
//             null
//           }
//           }
          
//         negSum =negArray.reduce((a,b)=>a+b,0)
//     return [posArray.length,negSum]
//       }

// more to the point w/o going around the solution:
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}