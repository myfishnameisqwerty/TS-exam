export {}
console.log('STARTING PROJECT');
class Task{
    public _taskDesc:string;
    public _status:Boolean;
    constructor(taskDesc:string){
        this._status = false
        this._taskDesc = taskDesc;
    }
    statusDone():void{
        this._status = true;
    }
}
function addTask():void{
    let taskDesc:string;
    taskDesc = (<HTMLInputElement>document.querySelector('#todo-item')).value;
    let task:Task = new Task(taskDesc);
    taskList.push(task);
    localStorage.setItem('allTasks',JSON.stringify(taskList))
    showTasks();
    
}
function loadStorage():void{
    if (localStorage.getItem('allTasks')) 
        taskList = JSON.parse(localStorage.getItem('allTasks'))
    showTasks();
}
function removeAllTasks():void{
    localStorage.removeItem('allTasks')
}
function showTasks():void{
    let divToDoList = document.querySelector('#todo-list')
    divToDoList.innerHTML = ''
    for (const iterator of taskList) {
        divToDoList.innerHTML+=`
        <div>
        <span>${iterator._taskDesc}</span><button class='todo-ok'>V</button>
        </div>
        `
    }
}
let taskList: Task[] = [];
window.onload = ()=>{

    let addButton = document.querySelector('#todo-save')
    let removeAll = document.querySelector('#todo-delall')
    loadStorage();
    addButton.addEventListener('click', addTask);
    removeAll.addEventListener('click', removeAllTasks)


}
