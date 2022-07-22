alert('wait for feaching data');
let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');



async function featchTodos(){
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(function(response){
    
     
    //     return response.json();
    // }).then(function(data){
    //     tasks = data.slice(0,20);
    //     renderList();
    // }).catch(function(error){
    //     console.log('error', error);
    // });
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data
        // .slice(0, 20);
        console.log(data);
        renderList();
    }catch(error){
        console.log(error);
    }

}

function addTasktoDom(task){
    const li = document.createElement('li');
    li.innerHTML = `
    
          <input type="checkbox" id="${task.id}" ${task.completed? 'checked':''}  class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="bin2.png" class="delete" data-id="${task.id}"  />
        
    `;
    taskList.append(li);
}

function renderList () {
    taskList.innerHTML ='';
    for(let i= 0; i<tasks.length; i++){
        addTasktoDom(tasks[i]);
    }
    tasksCounter.innerHTML =tasks.length;
}

function toggaltask (taskId) {
    const task = tasks.filter(function(task){
        return task.id ==Number(taskId);
    })
    if(task.length>0){
        const currenttask = task[0];
        currenttask.completed = !currenttask.completed;
        renderList();
        showNotification("task toggled successfully");
        return;
    }
    showNotification("could not toggled the task");
}

function deleteTask (taskId) {
    const newtasks = tasks.filter(function(task){
        return task.id != Number(taskId);
    })
    tasks = newtasks;
    renderList();
    showNotification('task deleted successfully');
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification('task added succesfully');
        return;
    }
    showNotification('task can not be added');
    
}

function showNotification(text) {
    alert(text);
}

function handleinputkeypress(e){
    if(e.key == "Enter"){
        const text = e.target.value;
        
        if(!text){
            showNotification('Tast text can not be empty');
            return;
        }
        const task ={
            title: text,
            id: Date.now(),
            completed: false
        }
        e.target.value = "";
        addTask(task);
    }
}
function handelclicklistner(e){
    const target = e.target;
    console.log(target);
    if(target.className =='delete'){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }else if(target.className=='custom-checkbox'){
        const taskId = target.id;
        toggaltask(taskId);
        return;
    }
}

function initializeApp(){
    featchTodos();
    addTaskInput.addEventListener('keyup', handleinputkeypress);
    document.addEventListener('click', handelclicklistner);
}
initializeApp();