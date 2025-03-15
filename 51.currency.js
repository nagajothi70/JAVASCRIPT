let val=document.getElementsByClassName("codes")  
let ip=document.getElementById("input")  
let btn=document.getElementById("btn") 
//let rel=document.getElementById("result");
fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((data)=>setvalue(data))

function setvalue(data){
    let curr = Object.entries(data)
    
    for(let i=0;i<curr.length;i++){
        let vv=curr[i][0]
      let yy=`<option value=${vv}>${vv}</option>`
        val[0].innerHTML+=yy
        val[1].innerHTML+=yy    
        // for input tag instead of innerhtml we will use .value   
    }
}

btn.addEventListener('click',()=>{
let left=val[0].value;
let right=val[1].value;
let ipp=ip.value;
if(left===right){
alert("give diff option");
return;
}
else{
convert(left,right,ipp)
}
})

function convert(left,right,ipp){
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${ipp}&from=${left}&to=${right}`)
  .then((res)=>res.json())
  .then((data)=>{
    document.getElementById("result").innerHTML=Object.values(data.rates)[0]

//     rates has only one key-value pair: "EUR": 85.0.
// Object.values(data.rates) will return [85.0].
// Object.values(data.rates)[0] will give 85.0.
  })
}
