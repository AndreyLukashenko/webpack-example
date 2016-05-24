function TaskView({ name, isDone }) {
    return $(`
        <li class="task">
            <input type="checkbox" ${isDone ? 'checked' : ''}/>
            <span class="task-name">${name}</span>
            <button class="remove-task">X</button>
        </li>
    `);
}

module.exports = TaskView;
