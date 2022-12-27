const heading = document.querySelector("h1");//here our heading is containig the reference to the targeted h1 element NOT COPY so, whatever we do with this variable will automatically be updated in our DOM itself.

heading.innerText = "Hello Mehul";

console.log(heading);