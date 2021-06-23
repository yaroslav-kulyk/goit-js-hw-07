const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const initValue = nameOutputRef.textContent;

const onInputChange = event => {
  if (event.currentTarget.value === '') {
    return (nameOutputRef.textContent = initValue);
  }
  nameOutputRef.textContent = event.currentTarget.value;
};

nameInputRef.addEventListener('input', onInputChange);
