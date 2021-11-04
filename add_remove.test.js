// test add task function.
import { addTodo, removeTodo } from './src/functions';

describe('test add task function', () => {
  const taskList = [];
  test('test add new items in task list array', () => {
    addTodo('do my daily workout', taskList);
    expect(taskList).toHaveLength(1);
  });
  test('give the right index for the new item', () => {
    addTodo('do my daily workout', taskList);
    expect(taskList[taskList.length - 1].index).toBe(2);
  });
});
// test remove task function
describe('test remove task function', () => {
  const taskList = [
    {
      desc: 'do my daily workout',
      completed: false,
      index: 1,
    },
  ];
  test('should remove item from task array', () => {
    document.body.innerHTML = '<li>'
    + '<div class ="div-test">'
    + '<label><input type="checkbox">'
    + '<input type="text" value = "do my daily workout">'
    + '</label>'
    + '</div>'
    + '</li>';
    const elem = document.querySelector('.div-test');
    removeTodo(elem, taskList);
    expect(taskList).toHaveLength(0);
  });
  test('should remove task from the DOM', () => {
    const elts = document.querySelectorAll('.div-test');
    expect(elts).toHaveLength(0);
  });
});