import {edit} from './src/functions.js';
// test edit function
test('test edit function', () => {
  const tasks = [
    {
      desc: 'do my daily workout',
      completed: false,
      index: 1,
    }
  ]
  const [task ] = tasks;
  const newText = 'Visit my parent';
  edit(newText, task, tasks);
  expect(task.desc).toMatch('Visit my parent');
});