

let result1=document.getElementById("result1");
let bt1=document.getElementById("btn1")
function change(){
    let input1=document.getElementById("input1").value;
    let len1=input1.length;
    let op1='';
    for(let i=0;i<len1;i++){
        if(input1.charCodeAt(i)>=65 && input1.charCodeAt(i)<=90){
            op1+=String.fromCharCode(input1.charCodeAt(i)+32)
        }
        if(input1.charCodeAt(i)>=97 && input1.charCodeAt(i)<=122){
            op1+=String.fromCharCode(input1.charCodeAt(i)-32)
        }
    }
    console.log(op1);
    
    result1.innerHTML=op1;
}
let result2=document.getElementById("result2");
let bt2=document.getElementById("btn2")
function reverse(){
    let input2=document.getElementById("input2").value;
    let rev=input2.split('').reverse().join('');// normal reverse will not 
    // wrk because it is available for only arrays
    console.log(rev)
    result2.innerHTML=rev;
}

