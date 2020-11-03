 import colors from "../collections/colors.js";

const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
    colorWrapper: document.querySelector('.js-wrapper'),
};

let randomColor = null,
    intervalId = null,
    isActive = false;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

// Функция перебирает массив, выбирает рандомный цвет, который не равен предыдущему

function getColor(previosly){
  let min = 0;
  let max = colors.length;
  let next = colors[Math.floor(Math.random() * (max - min)) + min];

    if (next === previosly) {
    next = getColor(previosly); //recursive
  }
  
  return next;
}; 


//Функция добавляет инлайн стиль background-сolor для боди с рандомным цветом

function bodyBackgroundColor(color) {
    refs.body.style.backgroundColor = color;
}

//Функция добавляет название цвета в .inner-wrapper
function setRandomColorWrapper(color) {
    refs.colorWrapper.textContent = color;
}

/* Функция при клике на кнопку Старт
** запускает таймер планировщик, который каждую секунду
** генерирует рандомный цвет и добавляет класс к body 
*/
function onStartButtonClick() {
    if (isActive) { return; }
    isActive = true;
    intervalId = setInterval(() => {
        randomColor = getColor(randomColor);
        bodyBackgroundColor(randomColor);
        setRandomColorWrapper(randomColor);
        console.log('randomColor :>> ', randomColor);
 }, 1000);};

//Функция при клике на Стоп удаляет таймер и прекращает его работу

 function onStopButtonClick () {
        clearInterval(intervalId);
        isActive = false;
};



