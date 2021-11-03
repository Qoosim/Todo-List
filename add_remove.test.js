
/*const addTodo = require('./src/functions');*/
import {addTodo} from './src/functions.js';
describe('test add task function', () => {
  let taskList = [];
  test('test add new items in task list array',() => {
    addTodo('do my daily workout', taskList);
    expect(taskList).toHaveLength(1);
  });
  test('give the right index for the new item',() => {
    addTodo('do my daily workout', taskList);
    expect(taskList[taskList.length - 1].index).toBe(2);
  });
});