const time = document.querySelector('.time');

const date = document.querySelector('.date');

function showTime() {
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setTimeout(showTime, 1000);
    setTimeout(showDate, 1000);
}

function showDate() {
    const dateValue = new Date;
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' };
    const currentDate = dateValue.toLocaleDateString('en-EN', options);
    date.innerHTML = currentDate;
}


showTime();
showDate();
