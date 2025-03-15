 async function print(){
                return "hello"
            }
            console.log(print()) // async function always returns a promise
            print().then((msg)=>console.log(msg))
            // using then we can do neccessary things with async function
           

            let reacha= new Promise((resolve,reject)=>{
const status=false
if(status){
    setTimeout(resolve,3000,"vidya reached")
}
else{
    reject("vidya not reached")
}
        })


        async function asyncstatus(){
            try{// wait should be used 
            // only inside async function
            console.log("hi")
            res=await reacha
            console.log(res)
            console.log("bye")
        }
        catch(err){
            console.log(err)
            console.log("goodbye")
        }
    }
    //When the Promise is rejected, an error 
    // is thrown, and the code inside the try 
    // block stops executing immediately.
        asyncstatus()
