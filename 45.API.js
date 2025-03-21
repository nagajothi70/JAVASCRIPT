
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:22,
        id:456,
        title:'test',
        completed:false
    })
})
      .then(response => response.json())
      .then(json => console.log(json))

    // async function with api
      async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

