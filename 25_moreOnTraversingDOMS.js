document.getElementById("counter"); //faster than queryselector as make hash map of IDs and have O(1) time complexity.

const allListItems = document.querySelectorAll("ul li");

for (let i = 0; i < allListItems.length; i++) {
  const listItem = allListItems[i];
  listItem.innerText = "YOO";
}
console.log(allListItems);

//We can apply queryselector again in our nodelist. like above we have nodelist of li so we can rewite above code as

const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
// const li = ul.getElementById("li");//this will give error as it is more performant so JS give it's access when used with document object only.
console.log(li);

//Above is possible because in our DOM every node or element is like a small tree. like body is a tree with it's child elements and ul is another nested small tree with it li as child elements.



