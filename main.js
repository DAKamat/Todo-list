document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("task-input");
    var addTaskButton = document.getElementById("add-task-btn");
    var taskList = document.getElementById("task-list-wrapper");

    addTaskButton.addEventListener("click", function () {
        var taskName = taskInput.value;
        if (taskName.trim() !== "") {
            var taskItem = createTaskItem(taskName);
            taskList.prepend(taskItem);
            taskInput.value = "";
        }
    });

    function createTaskItem(taskName) {
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";

        var taskNameElement = document.createElement("span");
        taskNameElement.className = "task-name";
        taskNameElement.textContent = taskName;

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {

            // var newTaskName = taskInput.value = taskName;
            // taskInput.focus()

            var newTaskName = prompt("Enter the new task name", taskName);
            if (newTaskName && newTaskName.trim() !== "") {
                taskNameElement.textContent = newTaskName;
            }
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function () {
            taskItem.classList.toggle("complete");
        });


        //console.log(deleteButton.textContent);
        // console.log(deleteButton);
        //console.log(completeButton);
        var taskActions = document.createElement("div");
        taskActions.className = "task-actions";
        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);
        taskActions.appendChild(completeButton);

        taskItem.appendChild(taskNameElement);
        taskItem.appendChild(taskActions);

        return taskItem;
    }
});
