let inputEl = document.querySelector('input#name-input');
inputEl.addEventListener('keyup', function (e) {
  let span = document.querySelector('span#name-output');
  span.textContent = e.target.value;
});
