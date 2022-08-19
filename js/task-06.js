// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', () => {
//   if (inputEl.getAttribute('data-length') > inputEl.value.length) {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   } else {
//     inputEl.classList.remove('invalid');
//     inputEl.classList.add('valid');
//   }
// });

const onInputBlur = ({ currentTarget }) => {
  const targetLength = Number(currentTarget.dataset.length) || 6;
  currentTarget.className =
    targetLength === currentTarget.value.length ? 'valid' : 'invalid';
};

const inputRef = document.querySelector('#validation-input');
if (inputRef) {
  inputRef.addEventListener('blur', onInputBlur);
}
