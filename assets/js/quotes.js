const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const quoteButton = document.querySelector('.change-quote');

function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
}

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quoteText.innerHTML = data[getRandomNum(data.length)].text;
    quoteAuthor.innerHTML = data[getRandomNum(data.length)].author;
}
function initQuotes() {
    getQuotes();
    quoteButton.addEventListener('click', getQuotes);
}
export default initQuotes;
