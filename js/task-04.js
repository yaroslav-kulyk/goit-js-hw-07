let counterValue = 0;

const counterValueRef = document.querySelector('#value');
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]',
);
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]',
);

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

incrementButtonRef.addEventListener('click', increment);
decrementButtonRef.addEventListener('click', decrement);
