const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onInputSizeChange = event => {
  textRef.style.fontSize = `${inputRef.value}px`;
  //   textRef.style.fontSize = event.target.value + 'px';
};

inputRef.addEventListener('input', onInputSizeChange);
