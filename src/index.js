import "./styles.css";
import { taskList, taskListCompleted, taskListTrash, creatingTask, showModal, closeModal, addTask, displayTask } from "./logic.js";

//Selektory przycisków
const homeBtn = document.querySelector("#home");
const completedBtn = document.querySelector("#completed");
const trashBtn = document.querySelector("#trash");
const addTaskBtn = document.querySelector("#addTask");

//Selektory modala
const closeModalBtn = document.querySelector("#modalCancel");
const addModalBtn = document.querySelector("#modalAdd");

//Selektory elementów do wyświetlenia zadań
const homeContainer = document.querySelector("#contentContainer");

//Wywołanie funkcji wyświetlającej zadania
displayTask(homeContainer, taskList);

//Eventy przycisków strony
homeBtn.addEventListener("click", () => {
    console.log("Home");
});
completedBtn.addEventListener("click", () => {
    console.log("Completed");
});
trashBtn.addEventListener("click", () => {
    console.log("Trash");
});
addTaskBtn.addEventListener("click", () => {
    showModal();
});

//Eventy przycisków modala
closeModalBtn.addEventListener("click", () => {
    closeModal();
});
addModalBtn.addEventListener("click", () => {
    addTask();
    displayTask(homeContainer, taskList);
});