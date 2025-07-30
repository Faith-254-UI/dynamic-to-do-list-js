document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn'); // Use classList.add as required

            // Remove task when button clicked
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };

            // Append remove button and list item
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
        }
    }

    // Button click event
    addButton.addEventListener('click', addTask);

    // Enter key event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
