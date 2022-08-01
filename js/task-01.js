console.log(
  `Number of categories: ${
    document.querySelectorAll('ul#categories>li.item').length
  }`
);

const items = document.querySelectorAll('.item');
items.forEach(function (element) {
  console.log(`Category: ${element.querySelector('h2').innerHTML}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
