const inputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

inputRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  outputRef.style.fontSize = `${event.currentTarget.value}px`;
}
