document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Add task function; 'save' parameter determines if we save to Local Storage
    function addTask(taskText, save = true) {
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText !== "") {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            // Remove task when button clicked
            removeBtn.onclick = function() {
                taskList.removeChild(li);
                removeTaskFromStorage(taskText);
            };

            // Append remove button and list item
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // If task was added by user, save to Local Storage
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            // Clear input field if added via user input
            if (save) {
                taskInput.value = '';
            }
        } else if (save) {
            alert("Please enter a task.");
        }
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Button click event
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Enter key event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
