document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = createTaskElement(taskText, false);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

function createTaskElement(taskText, isCompleted) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const completeButton = document.createElement('div');
    completeButton.className = 'complete-button';
    if (isCompleted) completeButton.classList.add('completed');
    completeButton.addEventListener('click', function () {
        li.classList.toggle('completed');
        completeButton.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            document.getElementById('completed-list').appendChild(li);
        } else {
            document.getElementById('todo-list').appendChild(li);
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);
    li.appendChild(actionsDiv);

    return li;
}
