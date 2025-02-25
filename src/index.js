import "./styles.css";
import { taskList, taskListCompleted, taskListTrash, creatingTask, showModal, closeModal, addTask, displayTask } from "./logic.js";
import { creatingCompletedPage } from "./completedPage.js";

//Aktywny przycisk
let homePage = true;
let completedPage = false;
let trashPage = false;

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
    if (homePage === false) {
        homePage = true;
        completedPage = false;
        trashPage = false;
        displayTask(homeContainer, taskList);
    };
});
completedBtn.addEventListener("click", () => {
    if (completedPage === false) {
        homePage = false;
        completedPage = true;
        trashPage = false;
        creatingCompletedPage(homeContainer, taskListCompleted);
    };
});
trashBtn.addEventListener("click", () => {
    if (trashPage === false) {
        homePage = false;
        completedPage = false;
        trashPage = true;
        displayTask(homeContainer, taskListTrash);
    };
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

