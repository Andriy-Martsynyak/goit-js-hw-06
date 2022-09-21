const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onInputSizeChange = () => {
  textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', onInputSizeChange);
