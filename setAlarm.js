function setAlarm(employed, vacation){
    if (employed==true && vacation == false){
      return true
    }
    else
      return false
  }

//   https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

// more concise:
// function setAlarm(employed, vacation){
//     return employed && !vacation;
//   }
//   returns true if both conditions are true

// clever:
// const setAlarm = (employed, vacation) => employed && !vacation;

