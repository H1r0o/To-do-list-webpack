
function creatingCompletedPage(displayPlace, currentTaskList) {
    currentTaskList.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.classList.add("taskDivCompleted");
        taskDiv.innerHTML = `
    <h2>Completed tasks!</h2>
    <div class="taskName">${task.name}</div>
    <div class="taskDescription">${task.description}</div>
    <div class="taskDeadline">${task.deadline}</div>
    <div class="taskPriority">Priority: ${task.priority}</div>
    <div id="taskButtons">
    <button class="taskUndo taskButton">Undo</button>
    <button class="taskDelete taskButton">Delete</button>
    </div>
    `;

        displayPlace.appendChild(taskDiv);
    });
};

export { creatingCompletedPage };