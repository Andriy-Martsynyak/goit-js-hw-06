const form = document.querySelector('.login-form');

const onSubmitForm = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;
  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(`Email: ${email.value}.Password: ${password.value}`);
  form.reset();
};

form.addEventListener('submit', onSubmitForm);
