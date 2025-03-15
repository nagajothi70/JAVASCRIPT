 function normal(name){
                console.log("hi"+name);
            }
            function htmls(names){
                let gen=document.getElementById("1")
                gen.innerHTML="hi"+names
            }
    function greets(callbacknames){
        callbacknames(" jothi")
        console.log(callbacknames)


    }
            greets(normal)
            greets(htmls)// instead passing just names 
       //instead of just giving function
       //  name we can also give hole 
       // function but use arrow function orelse error occurs
            greets(names=>{
                let gen=document.getElementById("1")
                gen.innerHTML="hi"+names
            })
