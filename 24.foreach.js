            // basic for each 
                let arr=["apple","banana","papaya"]
                arr.forEach(print)

                function print(val){
                    console.log(val)
                }
                // arrow function 
                arr.forEach(val =>{
                    console.log(val.toUpperCase())
                })
                console.log(arr)

                arr.forEach((val,index,arr) =>{
                  arr[index]= val.toUpperCase()
                })
                console.log(arr)
 // to  add options using foreach
let grr=["eee","it","ece","mech"]
grr.forEach(val=>{
    const opt = document.createElement("option")
    opt.innerHTML=val
    opt.value=val
   let ff= document.getElementById("7")
   ff.appendChild(opt);
   
})
// task to add list using for each
let hrr=["eee","it","ece","mech","chem","bio"]
hrr.forEach(balues =>{
    let brr=document.createElement("li")
    brr.innerHTML=balues
    document.getElementById("6").appendChild(brr)
})


// task to add only positive numbers
let crr=[4,-8,9,-6,-7,9,10,3]
let sum=0;
crr.forEach(navues=>{
  
    if(navues>0){
        sum+=navues
      
    }
})
console.log(sum)
