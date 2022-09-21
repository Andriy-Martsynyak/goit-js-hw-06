const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onInputFill = event => {
  if (event.target.value === '') {
    outputRef.textContent = 'Anonymous';
  } else outputRef.textContent = event.target.value;
};

inputRef.addEventListener('input', onInputFill);
