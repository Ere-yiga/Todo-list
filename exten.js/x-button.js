
export function x(taskInput, taskList, saveTasksToLocalStorage) {
    const button = document.querySelector("#addTask");

    button.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = taskInput.value;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", function() {
                const listItemToRemove = this.parentNode;
                taskList.removeChild(listItemToRemove);
                saveTasksToLocalStorage(taskList);
            
            });

            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);
            taskInput.value = "";
            saveTasksToLocalStorage(taskList);
        }
    });
}

