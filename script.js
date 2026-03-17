const input = document.querySelector('.input-field');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function(e){
    e.code
})

function addTask() {

    let text = input.value;

    let li = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = text;
    task.className = "task";

    taskList.appendChild(li);
    li.appendChild(task);

    input.value = '';

}