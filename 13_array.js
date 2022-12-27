let myFriends = [];

function addMyFriends(friend){
    myFriends.unshift(friend);//add element at start
    myFriends.push(friend);//add element at end
    console.log(myFriends);
}

addMyFriends("MEHUL");
addMyFriends("SOMEONE");
addMyFriends("3");

const lastValue = myFriends.pop();

console.log(myFriends);
console.log(lastValue);