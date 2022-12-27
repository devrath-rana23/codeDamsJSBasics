const myAge = 22;

if (true) {
  const myAge = 23; //This will not give error and shadows the above myAge
  function printMyAge() {
    let myAge;
    console.log(myAge); //It will check if myAge is in it's local scope -> if no then go to it's parent scope-> if no then go to it's grandparent scope and just declaring a variable is enough to shadow it's value
  }
}
printMyAge();
