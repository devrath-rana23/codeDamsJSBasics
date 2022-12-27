//In js generally when we see a opening and closing brace that is a scope. A scope is an area in which a variable lifetime is

function x() {
    if (true) {
      let hello = "HEY";
      console.log(hello);
    }
    console.log(hello); //this will give error
  }
  
  x();
  console.log(hello); //this will give error
  