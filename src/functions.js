const addTodo = (list, task) => {
  task.push({ desc: list, completed: false, index: task.length + 1 });
  localStorage.setItem('tasks', JSON.stringify(task));
};

const removeTodo = (elem, tasks) => {
  const text = elem.children[0].children[1].value;
  tasks.forEach((task) => {
    if (task.desc === text) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  elem.parentElement.remove();
};

export { addTodo, removeTodo };
