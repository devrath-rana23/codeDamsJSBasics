const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let counter = 0;

function incrementCounter() {
  const counterEl = document.getElementById("counter");
  counter++;
  counterEl.innerText = counter;
}

function decrementCounter() {
  const counterEl = document.getElementById("counter"); //faster than queryselector as make hash map of IDs and have O(1) time complexity.
  counter--;
  counterEl.innerText = counter;
}

decrementBtn.addEventListener("click", decrementCounter);
incrementBtn.addEventListener("click", incrementCounter); //we are not calling incrementCounter so we will just pass the name of this function. We have tied this function call to button click event of this page
