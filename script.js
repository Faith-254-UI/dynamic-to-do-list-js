document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new tasks
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check for empty input
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create new list item
        const li = document.createElement('li');
        
        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            li.remove();
        };
        
        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
    }
    
    // Add click event to button
    addButton.addEventListener('click', addTask);
    
    // Add Enter key event to input
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});