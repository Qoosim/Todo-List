import './style.css';
import getStatus from './status';
import { addTodo, removeTodo } from './functions';

const output = document.querySelector('.output');
const ul = document.createElement('ul');
ul.classList.add('list-group', 'list-unstyled');
const inputText = document.querySelector('.inputText');
const addBtn = document.querySelector('.addBtn');

/**
let tasks = [
  { desc: 'Solve coding challenge', completed: false, index: 0 },
  { desc: 'Attend tech conference', completed: false, index: 1 },
  { desc: 'Go to gym', completed: false, index: 2 },
];
*/
const getList = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
};

const createTask = () => { // eslint-disable-line no-unused-vars
  const tasks = getList();
  ul.innerHTML = ''; // Prevent duplicating
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-group-items';
    const div = document.createElement('div');
    div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'px-2', 'py-3', 'border', 'border-top');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    const text = document.createElement('input');
    text.classList.add('mx-4', 'border', 'border-0');
    text.value = task.desc;
    checkbox.addEventListener('change', () => {
      getStatus(checkbox, task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    label.append(checkbox, text);

    const verticalDots = document.createElement('i');
    verticalDots.classList.add('bi', 'bi-three-dots-vertical');
    verticalDots.style.cursor = 'pointer';

    div.append(label, verticalDots);
    li.appendChild(div);
    ul.appendChild(li);
    output.appendChild(ul);

    verticalDots.addEventListener('dblclick', () => {
      const trash = document.createElement('i');
      trash.classList.add('bi', 'bi-trash');
      trash.style.cursor = 'pointer';
      verticalDots.remove();
      div.append(label, trash);

      trash.addEventListener('click', (e) => {
        const tasks = getList();
        const removeItem = e.target.parentElement;
        removeTodo(removeItem, tasks);
      });
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

addBtn.addEventListener('click', () => {
  if (inputText.validity.valueMissing) {
    inputText.setCustomValidity('Please enter todo list!');
    inputText.reportValidity();
  } else {
    const tasks = getList();
    addTodo(inputText.value, tasks);
    createTask();
    inputText.value = '';
    inputText.focus();
  }
});

createTask();
