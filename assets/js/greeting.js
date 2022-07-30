const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function getTimeOfDay() {
    const listTimeOfDay = ['night', 'morning', 'afternoon', 'evening'];
    const currentDate = new Date;
    const hours = currentDate.getHours();
    return listTimeOfDay[Math.floor(hours / 6)];
}

function showGreeting() {
    const timeOfDay = getTimeOfDay()
    const greetingText = `Good ${timeOfDay}`;
    greeting.innerHTML = greetingText;
    window.addEventListener('beforeunload', setLocaleStorage);
    window.addEventListener('load', getLocaleStorage);
}

function setLocaleStorage() {
    localStorage.setItem('name', name.value)
}

function getLocaleStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

export default showGreeting;