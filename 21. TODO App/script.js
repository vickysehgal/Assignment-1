const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task to the list
function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Add task to the list when the button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add task to the list when the enter key is pressed
taskInput.addEventListener("keypress", function (event) {
  if (event.key === 13) {
    addTask();
  }
});
