import { edit, removeCompleted } from './src/functions';
import getStatus from './src/status';

// test edit function
test('test edit function', () => {
  const tasks = [
    {
      desc: 'do my daily workout',
      completed: false,
      index: 1,
    },
  ];
  const [task] = tasks;
  const newText = 'Visit my parent';
  edit(newText, task, tasks);
  expect(task.desc).toMatch('Visit my parent');
});
// test get status function.
describe('Test task completed status', () => {
  const taskList = [
    {
      desc: 'coding challenge',
      completed: false,
      index: 1,
    },
  ];
  const [task] = taskList;
  document.body.innerHTML = '<input type="checkbox" class="checked-box" checked>'
    + '<input type="checkbox" class="checked-box">';
  const elems = document.querySelectorAll('.checked-box');
  test('should mark task as completed', () => {
    getStatus(elems[0], task);
    expect(task.completed).toBeTruthy();
  });

  test('test marks as not completed', () => {
    getStatus(elems[1], task);
    expect(task.completed).toBeFalsy();
  });
});
// test clear all completed function
describe('test features of clear all completed function', () => {
  let tasks = [
    {
      desc: 'coding challenge',
      completed: false,
      index: 1,
    },
    {
      desc: 'do my daily workout',
      completed: true,
      index: 2,
    },
    {
      desc: 'visit my parents',
      completed: false,
      index: 3,
    },
  ];
  const notCompletedTask = {
    desc: 'coding challenge',
    completed: false,
    index: 1,
  };
  test('save only not completed items', () => {
    removeCompleted(tasks);
    tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toContainEqual(notCompletedTask);
  });
  test(' function reorder the task index ', () => {
    const arrayIndex = [];
    tasks.forEach((element) => arrayIndex.push(element.index));
    expect(arrayIndex).toEqual([1, 2]);
  });
});