 let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies
let todos = [];
window.onload = ()=>{ // whenever window load this executed
    todos = JSON.parse(localStorage.getItem('todos')) || [] //getitem gives us string thus we are using parse
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)// goes to function
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);// ddelete that  element from array
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}
