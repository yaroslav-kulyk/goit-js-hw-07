const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('#controls').firstElementChild,
  createBtn: document.querySelector('[data-action="render"]'),
  purgeBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateButonClick);
refs.purgeBtn.addEventListener('click', destroyBoxes);

function onCreateButonClick() {
  return createBoxes(refs.input.value);
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 1; i <= amount; i++) {
    boxes.push(`
    <div
    style="
    display: block;
    width: ${i * 10 + 20}px;
    height: ${i * 10 + 20}px;
    background-color: ${makeRandomColor()}
    ">
    </div>
    `);
  }
  return refs.boxes.insertAdjacentHTML('afterbegin', boxes.join(''));
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function makeRandomColor() {
  let c = '';
  while (c.length < 6) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  return '#' + c;
}
