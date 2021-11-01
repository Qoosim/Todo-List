import './style.css';
import getStatus from './status';
import {
  addTodo,
  removeTodo,
  removeCompleted,
  updateIndex,
} from './functions';

const output = document.querySelector('.output');
const ul = document.createElement('ul');
ul.classList.add('list-group', 'list-unstyled');
const inputText = document.querySelector('.inputText');
const addBtn = document.querySelector('.addBtn');
const delAll = document.querySelector('.delAll');

// Function to retrieve lists from the local storage.
const getList = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
};

// Function to create element and place their content.
const createTask = () => {
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

    // Event to edit todo text.
    text.addEventListener('change', () => {
      task.desc = text.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    // Event to checked and unchecked.
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

    // Event to change dots icon to trash icon after double clicking.
    verticalDots.addEventListener('click', () => {
      const trash = document.createElement('i');
      trash.classList.add('bi', 'bi-trash');
      trash.style.cursor = 'pointer';
      verticalDots.remove();
      div.append(label, trash);

      // Event to remove todo-list.
      trash.addEventListener('click', (e) => {
        const tasks = getList();
        const removeItem = e.target.parentElement;
        removeTodo(removeItem, tasks);
      });
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Event to add todo-list.
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

// Event to delete all completed tasks.
delAll.addEventListener('click', () => {
  const tasks = getList();
  removeCompleted(tasks);
  updateIndex(tasks);
  createTask();
});

createTask();
