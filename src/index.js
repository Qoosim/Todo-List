import './style.css';
import getStatus from './status';

const output = document.querySelector('.output');
const ul = document.createElement('ul');
ul.classList.add('list-group', 'list-unstyled');

let tasks = [
  { desc: 'Solve coding challenge', completed: false, index: 0 },
  { desc: 'Attend tech conference', completed: false, index: 1 },
  { desc: 'Go to gym', completed: false, index: 2 },
];

tasks = JSON.parse(localStorage.getItem('tasks')) || tasks;

const createTask = () => { // eslint-disable-line no-unused-vars
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
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

createTask();
