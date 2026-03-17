const input = document.querySelector('.input-field');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

let todos = JSON.parse(localStorage.getItem("todos")) || [];

addBtn.addEventListener('click', addtask);

input.addEventListener("keydown", function(event) {
    if(event.code === "Enter"){
        addtask();
    }
});

function renderTodos(){

    taskList.innerHTML = '';
    
    todos.forEach(todo => {
        let text = todo.text;

        let li = document.createElement('li');

        let task = document.createElement('span');
        task.textContent = text;
        task.className = "task";

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.className = "add-btn deleteBtn";

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        deleteBtn.addEventListener('click', function(e){
            // e.stopPropagation();
            taskList.removeChild(li);
            
            //Remove this
            let name=task.innerHTML;
            let idx=-1;
            for(let i in todos){
                if(todos[i].text==name){
                    idx=i;
                }
            }
            todos.splice(idx, 1);
            localStorage.setItem("todos", JSON.stringify(todos));


    });

    task.addEventListener('click', function(){
        if(checkbox.checked === false){
            task.style.textDecoration = "line-through";
            task.style.color = "#ff1a1a";
            task.style.opacity = 0.7;
            checkbox.checked = true;
        } else {
            task.style.textDecoration = "none";
            task.style.color = "#000";
            checkbox.checked = false;
            task.style.opacity = 1;
        }
    });

    checkbox.addEventListener('click', function() {
        if(checkbox.checked === true){
            task.style.textDecoration = "line-through";
            task.style.color = "#ff1a1a";
            task.style.opacity = 0.7;
        } else {
            task.style.textDecoration = "none";
            task.style.color = "#000";
            task.style.opacity = 1;
        }
    });

    if(text !== ''){
        taskList.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(task);
        li.appendChild(deleteBtn);

        input.value = '';
    } else {
        alert("your task is empty");
    }
    });
}

function addtask(){

    let text = input.value;

    todos.push({text:text, completed: false});
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodos();    
}

renderTodos();