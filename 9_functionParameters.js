let myAge = 22;
let sum = 22;
let totalCount = 22;

// arguments are values passed to function when creating them
function addsToMyAge(incrementBy){
myAge = (myAge +incrementBy)*incrementBy;
}

addsToMyAge("2s");//gives NAN as multiplying with Not a number or string. + will simply concatenate that string

console.log(myAge);