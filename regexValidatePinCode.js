<<<<<<< HEAD
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin){
    //return true or false
    
    //   [1 a 3 4]
    if (pin.length == 4 | pin.length == 6 ){
      let arr = pin.split()
  //       Count number of isNums and match to length of pin?
        let isNumCount = 0
        for (let i = 1; i>arr.length; i++){
          if(Number.isInteger(i.isNum)){
            isNumCount++  
          }
        }
        if(isNumCount === arr.length){
          true
        }
      }
    }

    // better:
    function validatePIN (pin) {
  
        var pinlen = pin.length;
        var isCorrectLength = (pinlen == 4 || pinlen == 6);
        var hasOnlyNumbers = pin.match(/^\d+$/);
          
        if(isCorrectLength && hasOnlyNumbers){
          return true;
        }
        
        return false;
      
      }

    // without regex:
    function validatePIN (pin) {
        pin = pin.split('')
       const findNaN = pin.find(character => !(parseInt(character) >= 0))
        if ((pin.length === 4 || pin.length === 6) && !findNaN) {
          return true
        } else {
          return false
        }

=======
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin){
    //return true or false
    
    //   [1 a 3 4]
    if (pin.length == 4 | pin.length == 6 ){
      let arr = pin.split()
  //       Count number of isNums and match to length of pin?
        let isNumCount = 0
        for (let i = 1; i>arr.length; i++){
          if(Number.isInteger(i.isNum)){
            isNumCount++  
          }
        }
        if(isNumCount === arr.length){
          true
        }
      }
    }

    // better:
    function validatePIN (pin) {
  
        var pinlen = pin.length;
        var isCorrectLength = (pinlen == 4 || pinlen == 6);
        var hasOnlyNumbers = pin.match(/^\d+$/);
          
        if(isCorrectLength && hasOnlyNumbers){
          return true;
        }
        
        return false;
      
      }

    // without regex:
    function validatePIN (pin) {
        pin = pin.split('')
       const findNaN = pin.find(character => !(parseInt(character) >= 0))
        if ((pin.length === 4 || pin.length === 6) && !findNaN) {
          return true
        } else {
          return false
        }

>>>>>>> c3c174b31cbc61c2f7bd7cb56f3ffb28c0e1ee9a
        