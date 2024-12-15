function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const control = document.getElementById('controls');

const input = control.querySelector('input')
  ;
const createButton = control.querySelector('[data-create]');

const destroyButton = control.querySelector('[data-destroy]');
const boxesCont = document.getElementById('boxes');




createButton.addEventListener('click', event => {
  
const amount = parseInt(input.value, 10);

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } 
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '44px'; 
    boxes.push(box);
    size += 10; 
  
  }
  boxesCont.innerHTML = ''; 
  boxesCont.style.display = 'flex';
  boxesCont.style.alignItems = 'flex-start';
  boxesCont.append(...boxes); 
}

function destroyBoxes() {
  boxesCont.innerHTML = ''; 
}