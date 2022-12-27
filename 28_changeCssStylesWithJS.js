const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const ulElem = document.querySelector("#list_items");

let counter = 0;

function incrementCounter() {
  const counterEl = document.getElementById("counter");
  counter++;
  counterEl.innerText = counter;

  //create element
  let liElem = document.createElement("li");
  liElem.setAttribute("data-counter", counter);

  liElem.innerHTML = "Something: " + counter; //replace above code

  //append element
  ulElem.appendChild(liElem);
}

function decrementCounter() {
  const counterEl = document.getElementById("counter");

  const li = ulElem.querySelector("[data-counter='" + counter + "']");

  const number = parseInt(li.getAttribute("data-counter"), 10);
  if (number % 2 === 0) {
    li.style.background = "red";
  } else {
    li.setAttribute("class", "yellow");
  }

  counter--;
  counterEl.innerText = counter;
}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
