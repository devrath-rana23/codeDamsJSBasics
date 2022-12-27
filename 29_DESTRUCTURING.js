const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; //desctructuring two arrays using spread operator

console.log(arr3);

const KEYNAME = "COOL";
const obj1 = { name: "Mel", loc: 23, KEYNAME };
const obj2 = { name: "Kel" };

const obj3 = { ...obj1, ...obj2 }; //desctructuring two objects using spread operator

console.log(obj3); //if property overlaps then override takes place
