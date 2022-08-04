let input = document.querySelector('input#name-input');
// Вешаем обработчик события на инпут
input.addEventListener('keyup', function (e) {
  // Выбираем р
  let span = document.querySelector('span#name-output');
  span.textContent = e.target.value;
});
