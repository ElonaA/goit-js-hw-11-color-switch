 import colors from "../collections/colors.js";

const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
    colorWrapper: document.querySelector('.js-wrapper'),
};

let random = null,
    intervalId = null,
    isActive = false;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

//Вариант функции с циклом do..while - не работает на гитхаб
// function getColorRandom(min, max) {
//     do {
//         random = colors[Math.floor(Math.random() * (max - min)) + min];
//     } while (random === getColorRandom.last);
//     getColorRandom.last = random;
//     return random;
// };

// Функция перебирает массив, выбирает рандомный цвет, который не равен предыдущему

function getColorRandom(min, max) {

    random = colors[Math.floor(Math.random() * (max - min)) + min];
    
    if (random === getColorRandom.last) {
        getColorRandom(min, max);
    }
    else {
        getColorRandom.last = random;
    }
 return random;
}

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
    if (isActive) {
        return;
    }

    isActive = true;

    intervalId = setInterval(() => {
        const randomColor = getColorRandom(0, colors.length - 1);
        bodyBackgroundColor(randomColor);
        setRandomColorWrapper(randomColor);
        }, 1000);
};

//Функция при клике на Стоп удаляет таймер и прекращает его работу

 function onStopButtonClick () {
        clearInterval(intervalId);
        isActive = false;
};
