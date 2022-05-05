function areYouPlayingBanjo(name) {
    let arr=name.split("")
    if (arr[0].toLowerCase()==="r"){
      return `${name} plays banjo`
    }
    else{
      return `${name} does not play banjo`
    }
    
  }
//   https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// more concise:
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

// this uses ternary and cleverly places it in the return statement. uses the conditional to determine if the next part of the string is "plays" or "does not play"