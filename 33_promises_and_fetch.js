const promiseObject1 = fetch("./data.json"); //IT is an API from browser which will not return the response right away but will return a PROMISE OBJECT

//PROMISE OBJECT IS A OBJECT WHICH PROMISES NOT DEFINITELY THAT IT WILL RESOLVE THER REQUEST IN FUTURE with definitive value. LIKE ABOVE IS A PROMISE OBJECT WHICH SAYS IN 2 or 3 seconds I will have a definitive value.

//data here is the resolved value and this then arrow function is run when the said promise is resolved
promiseObject1.then((data) => {
  console.log(data);
  //   console.log(data.json()); //gives promise object

  const promiseObject2 = data.json();

  promiseObject2.then((res) => {
    console.log(res);
  });
});
