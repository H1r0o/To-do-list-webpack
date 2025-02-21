import "./styles.css";
//Lista zadań
const taskList = [{
    name: "Default Task",
    description: "Description Default",
    deadline: "2022-01-01",
    priority: "3",
    isDone: false,
}];

//Selektory przycisków
const homeBtn = document.querySelector("#home");
const completedBtn = document.querySelector("#completed");
const trashBtn = document.querySelector("#trash");
const addTaskBtn = document.querySelector("#addTask");
//Selektory modala

const modal = document.querySelector("#modalContainer");
const closeModalBtn = document.querySelector("#modalCancel");
const addModalBtn = document.querySelector("#modalAdd");

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
addTaskBtn.addEventListener("click", () => {
    modal.showModal();
});

//Funkcja zamknięcia modala
closeModalBtn.addEventListener("click", () => {
    modal.close();
});

//Funkcja dodająca zadanie do listy
addModalBtn.addEventListener("click", () => {
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
});
