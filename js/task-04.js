const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;
counter.textContent = counterValue;

const onIncrementClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const onDecrementClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);
