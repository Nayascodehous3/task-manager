const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    
   if (taskInput.value.trim() === ""){
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (){
        newTask.remove();
    });
    newTask.addEventListener("click", function (){
        newTask.classList.toggle("completed");
    });
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";

    taskInput.addEventListener("keypress", function (event){
            if(event.key === "Enter"){
                addTaskButton.click();
            }

    })
});