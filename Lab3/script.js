const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = taskInput.value.trim();

    if (!value) return;

    createTask(value);
    taskInput.value = '';
});

function createTask(text) {

    const li = document.createElement('li');
    li.classList.add('task-item');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('task-content');

    const check = document.createElement('input');
    check.type = 'checkbox';

    const textNode = document.createElement('span');
    textNode.textContent = text;

    check.addEventListener('change', () => {
        textNode.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-btn');

    removeButton.addEventListener('click', () => {
        li.remove();
    });

    contentDiv.appendChild(check);
    contentDiv.appendChild(textNode);

    li.appendChild(contentDiv);
    li.appendChild(removeButton);

    taskList.appendChild(li);
}
