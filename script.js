const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Get tasks from local storage or create empty array if not exists
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Update task list in the DOM
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });
    li.appendChild(checkbox);
    const span = document.createElement("span");
    span.innerText = task.name;
    li.appendChild(span);
    const doneButton = document.createElement("button");
    doneButton.classList.add("done");
    doneButton.dataset.index = index;
    doneButton.innerText = '\u{1F44F}';
    li.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
        tasks[index].done = !tasks[index].done;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    });
    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.dataset.index = index;
    deleteButton.innerText = "\u{2716}";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Add new task to the list and update local storage
function addTask(event) {
  event.preventDefault();
  if (taskInput.value) {
    tasks.push({ name: taskInput.value, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
  }
}

// Initialize app
renderTasks();

// Add event listeners
document.querySelector("form").addEventListener("submit", addTask);



const doneButton = document.querySelector('.done');

doneButton.addEventListener('click', () => {
    // doneButton.innerText = 'Are you sure?';
    // console.log(doneButton.innerText)
    console.log("erirkkasfj")
});