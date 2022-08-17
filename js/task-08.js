const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  if (!form.email.value || !form.password.value) {
    alert('Заповніть всі дані');
  }

  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  console.log({
    email,
    password,
  });

  form.reset();
}
