const addTodo = (list, task) => {
  task.push({ desc: list, completed: false, index: task.length + 1 });
  localStorage.setItem('tasks', JSON.stringify(task));
};

export default addTodo;
