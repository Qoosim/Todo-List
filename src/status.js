const getStatus = (elem, task) => {
  if (elem.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

export default getStatus;
