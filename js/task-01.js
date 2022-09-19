const listOfCategories = document.getElementById('categories');
const numOfCategories = listOfCategories.children;
console.log(`Number of categories: ${numOfCategories.length}`);

const listOfItems = document.querySelectorAll('.item');
listOfItems.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);

  const list = item.querySelector('ul');
  console.log(`Elements: ${list.children.length}`);
});
