
 function print(){
let hi=document.getElementById("one");
let arr=["Grow","Spend","Invest"]
let random=Math.floor(Math.random()*arr.length);
hi.innerHTML="Lets "+arr[random]+" Money";
}
