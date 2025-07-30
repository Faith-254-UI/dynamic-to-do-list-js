document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add task function
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create list item
        const li = document.createElement('li');
        
        // Set text content directly on li (no span)
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
        
        // Add removal functionality
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append button to list item
        li.appendChild(removeBtn);
        
        // Add list item to task list
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
    }
    
    // Event listeners
    // Button click
    addButton.addEventListener('click', addTask);
    
    // Enter key press
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});