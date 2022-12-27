const promiseValue = fetch("./data.json"); //will not return the response right away but will return a PROMISE OBJECT

//PROMISE OBJECT IS A OBJECT WHICH PROMISES NOT DEFINITELY THAT IT WILL RESOLVE THER REQUEST IN FUTURE with definitive value. LIKE ABOVE IS A PROMISE OBJECT WHICH SAYS IN 2 or 3 seconds I will have a definitive value.

//data here is the resolved value and this then arrow function is run when the said promise is resolved
promiseValue.then((data) => {
  console.log(data);
});
