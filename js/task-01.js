console.log(
  `Number of categories: ${document.querySelectorAll('.item').length}`
);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(function (element) {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
