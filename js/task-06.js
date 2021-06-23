const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validateOnInputBlur);

function validateOnInputBlur() {
  if (inputRef.value.length != inputRef.dataset.length) {
    return inputRef.classList.add('invalid');
  }

  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.replace('invalid', 'valid');
  }

  inputRef.classList.add('valid');
}
