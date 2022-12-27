const myProfile = {
    name: "MEHUL",
    age: 23,
  };
  
  const secondProfile = {
    name: "Karin",
    age: 42,
  };
  
  function primitiveMutate(primitive) {
    primitive++;
    console.log(primitive);
  }
  
  function mutate(obj) {
    obj.age++;
  }
  
  let num = 100;
  
  primitiveMutate(num);//basically any primitive type like number string boolean will pass their value and it gets copied
  
  console.log(num);//this is same that is primitive variable is copy of this num so num is not incremented
  
  mutate(secondProfile);//in case of Object the address is passed or the reference is passed
  
  console.log(secondProfile.age);//mutate will change the object itself as it is called by reference i.e. we are actually sending the address of object present and thus it is also changed
  