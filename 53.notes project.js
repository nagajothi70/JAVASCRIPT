let input=document.getElementById("input");
let btn=document.getElementById("btn");
let two=document.getElementById("two")
let notes=[];
window.onload=()=>{
    notes=JSON.parse(localStorage.getItem('notes'))||[]
    notes.forEach((note) => {
        add(note)
    });
} 


btn.addEventListener('click',()=>{
let text= input.value.trim();
if(text===''){
    alert("enter valid notes")
    return;
}
else{
    notes.push(text)
   localStorage.setItem('notes',JSON.stringify(notes))
   add(text);
   input.value='';

}
})
function add(note){
    let area=document.createElement("textarea");
    area.innerText=note;
    two.appendChild(area);
    area.style.overflow = "hidden"; // Prevent scrollbar
    area.style.resize = "none"; // Disable manual resizing
    //two.appendChild(area);
    area.style.height = "auto"; // Reset height
    area.style.height = area.scrollHeight + "px"; // Adjust to content






    area.addEventListener("input", () => {
        area.style.height = "auto"; // Reset height
        area.style.height = area.scrollHeight + "px"; // Adjust to new content
    });




    area.addEventListener("click",()=>{
        area.style.textDecoration='line-through'
        remove(note);
    })
    area.addEventListener("dblclick",()=>{
        two.removeChild(area);
        remove(note);
    })
}
function remove(note){
    let index=notes.indexOf(note)
    if(index>-1){
        notes.splice(index,1)
    }
    localStorage.setItem("notes",JSON.stringify(notes))
}
