const allListItems = document.querySelectorAll("ul li");

for (let i = 0; i < allListItems.length; i++) {
  const listItem = allListItems[i];
  listItem.innerText = "YOO";
}
console.log(allListItems);

