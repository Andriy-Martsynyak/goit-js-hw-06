const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
ingredients.forEach(ingredient => {
  const list = document.getElementById('ingredients');
  const listItem = document.createElement('li');
  listItem.textContent = `${ingredient}`;
  listItem.classList.add('item');
  list.append(listItem);
});
