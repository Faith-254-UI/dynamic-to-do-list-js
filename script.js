document.addEventListener('DOMContentLoaded', function() {
    // 1. Select all required elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Create addTask function
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (!taskText) {
            alert("Please enter a valid task!");
            return;
        }
        
        // Create list item
        const li = document.createElement('li');
        
        // Create task text element
        const taskContent = document.createTextNode(taskText);
        li.appendChild(taskContent);
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add removal functionality
        removeBtn.addEventListener('click', function() {
            li.remove();
        });
        
        // Append button to list item
        li.appendChild(removeBtn);
        
        // Add list item to task list
        taskList.appendChild(li);
        
        // Clear input
        taskInput.value = '';
    }

    // 3. Add event listeners
    // Button click listener
    addButton.onclick = addTask;
    
    // Enter key listener
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});