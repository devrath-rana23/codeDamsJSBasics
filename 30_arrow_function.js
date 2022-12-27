x(); //will not give error reason being that javascript by default take all the functions and HOISTS them at top that's why we can access this function before it's declared in our code but does not do that with arrow function

function x() {
  console.log(1);
} //normal function
x();

// a(); will give error
const a = () => {
  console.log(2);
}; //arrow function. it is declared using const or let. if called above it's declaration will give error but not if called below it's declaration

a();

const y = () => 200;//removal of brackets only for single argument 

console.log(y());

//EG

const btn = document.querySelector("#increment");

btn.addEventListener("click",()=>{
    console.log("Clicked");
})
