document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="edit-task">Edit</button>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.edit-task').addEventListener('click', function() {
        const taskTextElem = li.querySelector('.task-text');
        const newText = prompt('Edit your task:', taskTextElem.textContent);
        if (newText) {
            taskTextElem.textContent = newText;
        }
    });

    li.querySelector('.complete-task').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-task').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}
