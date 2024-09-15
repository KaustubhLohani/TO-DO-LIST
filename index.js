const inputbox = document.getElementById('input-text');
const listcontainer = document.getElementById('list-container');
const addbutton = document.getElementsByClassName('button-add')[0];

addbutton.addEventListener('click', function() {
    if (inputbox.value === '') {
        alert("You must enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        
    }
    inputbox.value = ''; // Clear the input box after adding the task
    saveData();
}, true);
function addTaskkey(){
    if (inputbox.value === '') {
        alert("You must enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        
    }
    inputbox.value = ''; // Clear the input box after adding the task
    saveData();
}
inputbox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTaskkey();
    }
}, false);

listcontainer.addEventListener('click',function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask(); 