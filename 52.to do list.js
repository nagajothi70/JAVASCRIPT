 let input=document.getElementById("input")
                let btn=document.getElementById("btn")
                let result=document.getElementById("result")
                let todos=[];
window.onload=()=>{
todos=JSON.parse(localStorage.getItem("todos"))||[]
 todos.forEach((todo)=>addelement(todo))
}
btn.addEventListener("click",()=>{
    let task = input.value.trim(); // trim used to remove space after the enteres task
if (task === "") {
    alert("Please enter a valid task!");
    return;
}

    todos.push(task);
    localStorage.setItem('todos',JSON.stringify(todos))
    addelement(task)
    input.value=''
})
function addelement(todo){
    let para=document.createElement("p");
    para.innerText=todo;//for paragraph p should be used
    result.appendChild(para)

    para.addEventListener("click",()=>{
        para.style.textDecoration='line-through'
        remove(todo);
    })
para.addEventListener("dblclick",()=>{
    result.removeChild(para) // TO REMOVE HTML ELEMENTS
    remove(todo);
})
}
function remove(todo){
    let index=todos.indexOf(todo);
    if(index>-1){
    todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))

}

