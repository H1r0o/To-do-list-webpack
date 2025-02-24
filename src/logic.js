//Selektory modala
const modal = document.querySelector("#modalContainer");


//Lista zadań
const taskList = [{
    name: "Default Task",
    description: "Description Default",
    deadline: "2022-01-01",
    priority: "Low",
    isDone: false,
}];
const taskListCompleted = [];
const taskListTrash = [];




//Funkcja twożąca objekt zadania i dodająca go do listy
function creatingTask(name, description, deadline, priority) {
    let task = {
        name: name,
        description: description,
        deadline: deadline,
        priority: priority,
        isDone: false,
    };
    taskList.push(task);
};

//Funkcja wyświetlająca modal
function showModal() {
    modal.showModal();
};

//Funkcja zamknięcia modala
function closeModal() {
    modal.close();
};

//Funkcja dodająca zadanie do listy
function addTask() {
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let deadline = document.querySelector("#deadline").value;
    let priority = document.querySelector("#priority").value;

    //Zabezpieczenie przed dodaniem pustego zadania
    if (name === "" || description === "" || deadline === "") {
        alert("Please fill all fields");
        return;

    } else {
        creatingTask(name, description, deadline, priority);
        console.log(taskList);
        modal.close();
    };
};

//Wyświetlanie zadań
function displayTask(displayPlace, currentTaskList) {
    displayPlace.innerHTML = "";
    currentTaskList.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.priority === "Low") {
            taskDiv.classList.add("lowPriority");
        } else if (task.priority === "Medium") {
            taskDiv.classList.add("mediumPriority");
        }
        else if (task.priority === "High") {
            taskDiv.classList.add("highPriority");
        }
        taskDiv.innerHTML = `
        <div class="taskName">${task.name}</div>
        <div class="taskDescription">${task.description}</div>
        <div class="taskDeadline">${task.deadline}</div>
        <div class="taskPriority">Priority: ${task.priority}</div>
        <button class="taskDone">Done</button>
        <button class="taskDelete">Delete</button>
        `;
        displayPlace.appendChild(taskDiv);
    });

};

export { taskList, taskListCompleted, taskListTrash, creatingTask, showModal, closeModal, addTask, displayTask };


