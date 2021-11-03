// Function to add todo-list to the array of objects.
const addTodo = (list, task) => {
  task.push({ desc: list, completed: false, index: task.length + 1 });
  localStorage.setItem('tasks', JSON.stringify(task));
};

// Function to remove todo-list.
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

// Function to update the indexes of the remaining todos in the array.
const updateIndex = (task) => {
  let list = 1;
  task.forEach((item) => {
    item.index = list;
    list += 1;
  });
};

// Function to remove all completed todos.
const removeCompleted = (task) => {
  task = task.filter((elem) => elem.completed === false);
  updateIndex(task);
  localStorage.setItem('tasks', JSON.stringify(task));
};

export {
  addTodo,
  removeTodo,
  removeCompleted,
  updateIndex,
};
/*module.exports = addTodo;*/