const incrementBtn = document.querySelector("#increment");
const ulElem = document.querySelector("#list_items");

let counter = 0;

function incrementCounter() {
  const counterEl = document.getElementById("counter");
  counter++;
  counterEl.innerText = counter;

  //create element
  let liElem = document.createElement("li");
  let bElem = document.createElement("b");
  const textNode = document.createTextNode("Sentence ");
  const textNode2 = document.createTextNode(counter);
  bElem.appendChild(textNode);
  liElem.appendChild(bElem);
  liElem.appendChild(textNode2);

  liElem.innerHTML = "Something: " + counter;//replace above code

  //append element
  ulElem.appendChild(liElem);
}

incrementBtn.addEventListener("click", incrementCounter);
