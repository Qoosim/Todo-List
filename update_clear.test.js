import { edit } from './src/functions.js';
import { default as getStatus } from './src/status.js';

// test edit function
test('test edit function', () => {
  const tasks = [
    {
      desc: 'do my daily workout',
      completed: false,
      index: 1,
    }
  ];
  const [task] = tasks;
  const newText = 'Visit my parent';
  edit(newText, task, tasks);
  expect(task.desc).toMatch('Visit my parent');
});

describe('Test task completed or not', () => {
  test('should mark task as completed', () => {
    const taskList = [
      {
        desc: 'coding challenge',
        completed: false,
        index: 1,
      },
    ];
    document.body.innerHTML = '<li>'
    + '<div class ="div-test">'
    + '<label><input type="checkbox" id="checked-box">'
    + '<input type="text" value = "do my daily workout">'
    + '</label>'
    + '</div>'
    + '</li>';
    let elem = document.querySelector('#checked-box');
    elem = elem.checked;
    const task = taskList[0];
    expect(() => getStatus(elem, task)).toBeTruthy();
  });

  test('test marks as not completed', () => {
    const taskList = [
      {
        desc: 'coding challenge',
        completed: false,
        index: 1,
      },
    ];
    document.body.innerHTML = '<li>'
    + '<div class ="div-test">'
    + '<label><input type="checkbox" id="checked-box">'
    + '<input type="text" value = "do my daily workout">'
    + '</label>'
    + '</div>'
    + '</li>';
    const elem = document.querySelector('#checked-box');
    const task = taskList[0];
    getStatus(elem, task);
    expect(task.completed).toBeFalsy();
  });
});
