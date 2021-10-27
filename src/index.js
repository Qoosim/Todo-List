import './style.css';
import tasks from './data';

const output = document.querySelector('.output');
const ul = document.createElement('ul');
ul.classList.add('list-group', 'list-unstyled');

const createTask = ({ desc, completed, index }) => { // eslint-disable-line no-unused-vars
  const li = document.createElement('li');
  li.className = 'list-group-items';
  const div = document.createElement('div');
  div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'px-2', 'py-3', 'border', 'border-top');
  const label = document.createElement('label');
  label.innerHTML = `<input type="checkbox" id="checkbox"> &nbsp; &nbsp; ${desc}`;

  const verticalDots = document.createElement('i');
  verticalDots.classList.add('bi', 'bi-three-dots-vertical');
  verticalDots.style.cursor = 'pointer';

  div.append(label, verticalDots);
  li.appendChild(div);
  ul.appendChild(li);
  output.appendChild(ul);
};

const displayTasks = () => {
  tasks.forEach(createTask);
};

displayTasks();
