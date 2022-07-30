import getRandomNum from "./slider.js";

const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const quoteButton = document.querySelector('.change-quote');

async function getQuotes() {
    const quotes = '../../data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quoteText.innerHTML = data[getRandomNum(data.length)].text;
    quoteAuthor.innerHTML = data[getRandomNum(data.length)].author;
}

getQuotes();
quoteButton.addEventListener('click', getQuotes);