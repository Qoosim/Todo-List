import { addTodo, removeTodo } from './src/functions';

describe('test add task function', () => {
  const taskList = [];
  test('test add new item in task list array', () => {
    addTodo('do my daily workout', taskList);
    expect(taskList).toHaveLength(1);
  });
  test('give the right index for the new item', () => {
    addTodo('do my daily workout', taskList);
    expect(taskList[taskList.length - 1].index).toBe(2);
  });
});

/*
describe('test to remove task function', () => {
  const taskList = [];
  const taskListLen = taskList.length;
  const text = 'text';
  test('should remove item from the list array', () => {
    removeTodo(text, taskList);
    expect(taskList).toHaveLength(taskListLen - 1);
  });
});
*/
