const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridient = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map((item) => {
  const itemEL = document.createElement('li');
  itemEL.textContent += item;
  itemEL.classList.add('item');
  return itemEL;
});

listIngridient.append(...ingredientsEl);
