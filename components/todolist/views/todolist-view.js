let TaskView = require('./task-view');

function TodolistView(context) {
    let todolist = createTodolist(),
        tasks = $(todolist).find('.tasks');

    context.tasks.forEach(addTask);

    $(todolist).find('.add-task').click(() => {
        let newTask = $(todolist).find('.new-task'),
            task = context.addTask(newTask.val());

        addTask(task);
        newTask.val('');
    });

    function createTodolist() {
        return $(`
            <div class="todolist">
                <input type="text" class="new-task" />
                <button class="add-task">add task</button>
                <ul class="tasks"></ul>
            </div>
        `)[0];
    }

    function addTask(task) {
        tasks.append(TaskView(task));
    }

    return todolist;
}

module.exports = TodolistView;
