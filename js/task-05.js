// let inputEl = document.querySelector('input#name-input');

// inputEl.addEventListener('input', function (event) {
//   let span = document.querySelector('span#name-output');
//   span.textContent = event.currentTarget.value;
// });

const onInput = (event) => {
  spanRef.innerHTML = event.currentTarget.value || 'Anonymous';
};

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
if (inputRef && spanRef) inputRef.addEventListener('input', onInput);
