let myAge = 1;
let myBribe = 100;

function shouldIGetALicence(age, bribe, whitelisted) {
    if(!whitelisted){
        return "BLOCKED";
    }
  if (age > 18) {
    return true;
  } else {
    if (bribe > 100) {
      return true;
    }
    return false;
  }
}

// console.log(shouldIGetALicence(myAge, myBribe,0)); 0 is  a false value
// console.log(shouldIGetALicence(myAge, myBribe,undefined)); undefined is a false value
// console.log(shouldIGetALicence(myAge, myBribe,null)); null is a false value
