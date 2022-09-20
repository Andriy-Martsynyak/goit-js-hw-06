const inputRef = document.querySelector('#validation-input');
const minLength = inputRef.getAttribute('data-length');

const OnInputCheckLength = event => {
  if (event.target.value.length != minLength) {
    inputRef.classList.add('invalid');
  } else inputRef.classList.replace('invalid', 'valid');
};

inputRef.addEventListener('blur', OnInputCheckLength);
