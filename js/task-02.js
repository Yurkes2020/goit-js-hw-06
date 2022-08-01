const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridient = document.querySelector('#ingredients');
ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent += item;
  listIngridient.append(li);
  li.classList.add('item');
});
