const dates = document.querySelector('.date');

function showDate() {
    const dateValue = new Date;
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' };
    const currentDate = dateValue.toLocaleDateString('en-EN', options);
    dates.innerHTML = currentDate;
}


export default showDate;