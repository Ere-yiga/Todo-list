import {x} from "../exten.js/x-button.js"; 

const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const button = document.querySelector('#addTask');

function saveTasksToLocalStorage() {
    const currentTasks = Array.from(taskList.querySelectorAll('li')).map(li => li.textContent);
    localStorage.setItem('todoListItems', JSON.stringify(currentTasks));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('todoListItems');

    if (savedTasks) {
        const tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                const listItemToRemove = this.parentNode;
                taskList.removeChild(listItemToRemove);
                saveTasksToLocalStorage();
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    
    x(taskInput, taskList, saveTasksToLocalStorage);
});
