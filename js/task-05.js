let inputEl = document.querySelector('input#name-input');

inputEl.addEventListener('input', function (event) {
  let span = document.querySelector('span#name-output');
  span.textContent = event.currentTarget.value;
});
