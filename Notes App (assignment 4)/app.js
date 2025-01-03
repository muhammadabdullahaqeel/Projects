const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") 
        return;
    
    
    const task = { text: taskText };
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
}

function deleteTask(index){
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function editTask(index){
    const newTaskText = prompt("Edit the task: ", tasks[index].text);

    if(newTaskText !== null) {
        tasks[index].text = newTaskText;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}
function displayTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        var li = document.createElement("li");
        li.innerHTML =`
        <span>${task.text}</span>
        <hr>
        <button class="editButton" onclick="editTask(${index})">Edit</button>
        <button class="deleteButton" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
        
    });
}
displayTasks()