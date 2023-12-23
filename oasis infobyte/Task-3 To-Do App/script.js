function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const currentDate = new Date();
        const timestamp = currentDate.toLocaleString();
        
        const task = {
            text: taskText,
            timestamp: timestamp,
            completed: false,
        };

        const pendingList = document.getElementById('pendingList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <span>${task.timestamp}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)" class="delete-btn">Delete</button>
        `;
        pendingList.appendChild(li);

        taskInput.value = '';
    }
}

function completeTask(button) {
    const li = button.parentElement;
    const taskText = li.firstChild.textContent;
    
    const completedList = document.getElementById('completedList');
    const newLi = document.createElement('li');
    newLi.innerHTML = `
        <span class="completed">${taskText}</span>
        <span>${new Date().toLocaleString()}</span>
        <button onclick="deleteTask(this)" class="delete-btn">Delete</button>
    `;
    completedList.appendChild(newLi);

    li.remove();
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
