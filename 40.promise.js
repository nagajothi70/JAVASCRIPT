 const tatkalbook=new Promise((resolve,reject)=>{
            let status=true;
            if(status){
                resolve(650);
            }
            else{
                reject()
            }
        })
        tatkalbook.then((amt)=>console.log("booked ticket rs:"+amt))
        .catch(()=>console.log("not booked"))

        function tosscoin(){
            return new Promise((resolve,reject)=>{
            const rand=Math.floor(Math.random()*2)
            if(rand==0){
                resolve();
            }
            else{
                reject()
            }
        })
        }

        tosscoin().then(()=>console.log("you win"))
        .then(()=>console.log("you win 11 crores"))
        .then(()=>console.log("congratulations"))
        .catch(()=>console.log("you loss"))


        // there are 4 functions in promise
       // 1.Promise.all=only gives op when all resolve
       //2.Promise.allSettled=gives op when all gives either false or true
       //gives sets in array with status
       //3.Promise.any= gives op if atleast one is true . reject 
       //when all are false
       //4. gives op only which is first resolved 
        let reacha= new Promise((resolve,reject)=>{
const status=true
if(status){
    setTimeout(resolve,3000,"vidya reached")
}
else{
    reject("vidya not reached")
}
        })
        let reachb= new Promise((resolve,reject)=>{
const status=true
if(status){
    setTimeout(resolve,1000,"jothi reached")
}
else{
    reject("jothi not reached")
}
        })
        let reachc= new Promise((resolve,reject)=>{
const status=true
if(status){
    setTimeout(resolve,3000,"sumo reached")
}
else{
    reject("sumo not reached")
}
        })
Promise.race([reacha,reachb,reachc])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

