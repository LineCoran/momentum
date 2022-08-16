const addTaskButton = document.getElementById('setTask');
const taskListElement = document.querySelector('.todo__tasks-list');
const toDoTitle = document.querySelector('.todo__title');
const toDoLable = document.querySelector('.todo__label');
const taskInputElement = document.getElementById('todoTask');

let taskButtonsDelete;
let taskButtonsDone;
let taskList;

let taskCounter = 0;

const toDoWordsTitle = {
    en: 'To Do List',
    ru: 'Список дел'
}

const toDoWordsLable = {
    en: 'what is your task',
    ru: 'Какие у вас дела'
}

function createTaskBlock() {
    const taskText = taskInputElement.value;

    const taskElementMainBlock = document.createElement('div');
    taskElementMainBlock.classList.add('todo__task');
    taskElementMainBlock.id = (`task ${taskCounter}`);

    const taskElementText = document.createElement('div')
    taskElementText.classList.add('todo__task-text');
    taskElementText.innerHTML = taskText;

    const taskElementButtonsWrapper = document.createElement('div');
    taskElementButtonsWrapper.classList.add('todo__task__buttons');

    const taskElementButtonDone = document.createElement('div');
    taskElementButtonDone.classList.add('todo__task-button');
    taskElementButtonDone.classList.add('todo__task-button-done');
    taskElementButtonDone.id = (`done ${taskCounter}`);
    taskElementButtonDone.addEventListener('click', function(event) {
        console.log('hello');
        let el = event.target;
        doneTask(el.id);
    })

    const taskElementButtonDelete = document.createElement('div');
    taskElementButtonDelete.classList.add('todo__task-button');
    taskElementButtonDelete.classList.add('todo__task-button-delete');
    taskElementButtonDelete.id = (`delete ${taskCounter}`);
    taskElementButtonDelete.addEventListener('click', function(event) {
        let el = event.target;
        deleteTask(el.id);
    })

    taskElementButtonsWrapper.append(taskElementButtonDone);
    taskElementButtonsWrapper.append(taskElementButtonDelete);

    taskElementMainBlock.append(taskElementText);
    taskElementMainBlock.append(taskElementButtonsWrapper);

    return taskElementMainBlock;
}

function findAllButtons() {
    taskButtonsDone = document.querySelectorAll('.todo__task-button-done');
    taskButtonsDelete = document.querySelectorAll('.todo__task-button-delete');
}

function findAllTask() {
    taskList = document.querySelectorAll('.todo__task');
}

function deleteTask(text) {
    let id = text.replace(/[^0-9]/g, '')
    let time = 400;
    let element = document.getElementById(`task ${id}`);
    element.classList.remove('keyword-item-visible')
    setTimeout(function () {
        element.remove();
    }, time)
}

function doneTask(text) {
    let id = text.replace(/[^0-9]/g, '');
    document.getElementById(`task ${id}`).classList.toggle('todo__task-done');
}

function addTaskToList() {
    if (taskInputElement.value == "") return;
    taskCounter++;
    let time = 100;
    const newElement = createTaskBlock();
    taskListElement.append(newElement);
    setTimeout(function () {
        newElement.classList.add('keyword-item-visible')
    }, time)
    taskInputElement.value = '';
    findAllButtons();
    findAllTask();
}

export function startWordsForToDoList() {
    let currentLanguage = localStorage.getItem('lang');
    toDoTitle.innerHTML = toDoWordsTitle[currentLanguage];
    toDoLable.innerHTML = toDoWordsLable[currentLanguage];

}


export default function initToDoList() {
    taskInputElement.addEventListener('change', addTaskToList);
    addTaskButton.addEventListener('click', addTaskToList);
    startWordsForToDoList();
}



