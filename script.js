document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add task function - strictly follows requirements
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Check if input is not empty
        if (taskText !== "") {
            // 1. Create new li element
            const li = document.createElement('li');
            
            // 2. Set its textContent to taskText
            li.textContent = taskText;
            
            // 3. Create remove button
            const removeBtn = document.createElement('button');
            
            // 4. Set button textContent to "Remove"
            removeBtn.textContent = "Remove";
            
            // 5. Give class name 'remove-btn'
            removeBtn.className = 'remove-btn';
            
            // 6. Assign onclick event to remove li from taskList
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };
            
            // 7. Append remove button to li
            li.appendChild(removeBtn);
            
            // 8. Append li to taskList
            taskList.appendChild(li);
            
            // 9. Clear input field
            taskInput.value = '';
        }
    }
    
    // 10. Add event listener to button
    addButton.addEventListener('click', addTask);
    
    // 11. Add event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        // 12. Check for Enter key
        if (event.key === 'Enter') {
            addTask();
        }
    });
});