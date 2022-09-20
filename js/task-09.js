const btnColorChanger = document.querySelector('.change-color');
const body = document.body;
const textColorDefinition = document.querySelector('.color');

function changeRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.backgroundColor = randomColor;
  textColorDefinition.textContent = randomColor;
}

btnColorChanger.addEventListener('click', changeRandomColor);
