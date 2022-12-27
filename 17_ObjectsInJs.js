const result = 1 === 1; //always use === unless necessary
console.log(result);

const myOject = {
  keyname: function () {},
  "keyname 2.1": { keyname: "Hell" },
};

console.log(myOject["keyname 2.1"]["keyname"]);