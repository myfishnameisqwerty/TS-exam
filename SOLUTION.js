"use strict";
//exports.__esModule = true;
console.log('STARTING PROJECT');
var Task = /** @class */ (function () {
    function Task(taskDesc) {
        this._status = false;
        this._taskDesc = taskDesc;
    }
    Task.prototype.statusDone = function () {
        this._status = true;
    };
    return Task;
}());
function addTask() {
    var taskDesc;
    taskDesc = document.querySelector('#todo-item').value;
    var task = new Task(taskDesc);
    taskList.push(task);
    localStorage.setItem('allTasks', JSON.stringify(taskList));
    showTasks();
}
function loadStorage() {
    if (localStorage.getItem('allTasks'))
        taskList = JSON.parse(localStorage.getItem('allTasks'));
    showTasks();
}
function removeAllTasks() {
    localStorage.removeItem('allTasks');
}
function showTasks() {
    var divToDoList = document.querySelector('#todo-list');
    divToDoList.innerHTML = '';
    for (var _i = 0, taskList_1 = taskList; _i < taskList_1.length; _i++) {
        var iterator = taskList_1[_i];
        divToDoList.innerHTML += "\n        <div>\n        <span>" + iterator._taskDesc + "</span><button class='todo-ok'>V</button>\n        </div>\n        ";
    }
}
var taskList = [];
window.onload = function () {
    var addButton = document.querySelector('#todo-save');
    var removeAll = document.querySelector('#todo-delall');
    loadStorage();
    addButton.addEventListener('click', addTask);
    removeAll.addEventListener('click', removeAllTasks);
};
