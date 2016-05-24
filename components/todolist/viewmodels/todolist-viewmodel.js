require('../styles/todolist.css');
let Task = require('../models/task');

function TodolistViewModel() {
    this.tasks = [
        new Task('task1', false),
        new Task('task2', true),
        new Task('task3', false),
        new Task('task4', true),
    ];
}

TodolistViewModel.prototype.addTask = function (taskName) {
    let task = new Task(taskName, false);
    this.tasks.push(task);

    return task;
};

module.exports = TodolistViewModel;
