const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const friends = [
  {
    name: "x",
    age: 17,
  },
  {
    name: "y",
    age: 27,
  },
  {
    name: "z",
    age: 37,
  },
];

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];

  //do anything you want
}

const newMappedArray = arr.map((el) => el ** 2); //does not mutate the origin array

const filterdArray = arr.filter((el) => el > 4); //does not mutate the origin array

const findFriend = friends.find((el) => el.age === 37);

console.log(arr, newMappedArray, filterdArray, findFriend);
