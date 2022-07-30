import getTimeOfDay from './greeting.js';
let randomNum = getRandomNum(20);
const prevSlideButtom = document.querySelector('.slide-prev');
const nextSlideButtom = document.querySelector('.slide-next');
const body = document.getElementById('body');

function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
}
export default getRandomNum;

function setBg(random) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(random).padStart(2, "0")}.jpg`;
    img.onload = () => {
        body.style.background = `url(${img.src})`;
    }
}



function getSlidePrev() {
    (randomNum == 1) ? randomNum = 20 : randomNum--;
    setBg(randomNum);
}

function getSlideNext() {
    (randomNum == 20) ? randomNum = 1 : randomNum++;
    setBg(randomNum);
}

setBg(randomNum);
prevSlideButtom.addEventListener('click', getSlidePrev)
nextSlideButtom.addEventListener('click', getSlideNext)


