  let count=1;
function start(){
    
            alert(" Game started! now A turn")
}

function one(){
    if(count%2!=0){
    document.getElementById("one").innerHTML="A"
   
    }
else{
 document.getElementById("one").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function two(){
    if(count%2!=0){
    document.getElementById("two").innerHTML="A"
    }
else{
 document.getElementById("two").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function three(){
    if(count%2!=0){
    document.getElementById("three").innerHTML="A"
    }
else{
 document.getElementById("three").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function four(){
    if(count%2!=0){
    document.getElementById("four").innerHTML="A"
    }
else{
 document.getElementById("four").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function five(){
    if(count%2!=0){
    document.getElementById("five").innerHTML="A"
    }
else{
 document.getElementById("five").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function six(){
    if(count%2!=0){
    document.getElementById("six").innerHTML="A"
    }
else{
 document.getElementById("six").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function seven(){
    if(count%2!=0){
    document.getElementById("seven").innerHTML="A"
    }
else{
 document.getElementById("seven").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
function eight(){
    if(count%2!=0){
    document.getElementById("eight").innerHTML="A"
    }
else{
 document.getElementById("eight").innerHTML="B"
}
count++;
}
function nine(){
    if(count%2!=0){
    document.getElementById("nine").innerHTML="A"
    }
else{
 document.getElementById("nine").innerHTML="B"
}
if(count==9){
check();
}else{
count++;
}
}
//||||doucument.getElementById("four").value==doucument.getElementById("five").value==doucument.getElementById("six").value){
    function check() {
    const one = document.getElementById("one").innerHTML;
    const two = document.getElementById("two").innerHTML;
    const three = document.getElementById("three").innerHTML;
    const four = document.getElementById("four").innerHTML;
    const five = document.getElementById("five").innerHTML;
    const six = document.getElementById("six").innerHTML;
    const seven = document.getElementById("seven").innerHTML;
    const eight = document.getElementById("eight").innerHTML;
    const nine = document.getElementById("nine").innerHTML;

    if (one && one === two && two === three) {
        document.getElementById("result").innerHTML = one + " wins!";
    } else if (one && one === four && four === seven) {
        document.getElementById("result").innerHTML = one + " wins!";
    } else if (one && one === five && five === nine) {
        document.getElementById("result").innerHTML = one + " wins!";
    } else if (two && two === five && five === eight) {
        document.getElementById("result").innerHTML = two + " wins!";
    } else if (three && three === six && six === nine) {
        document.getElementById("result").innerHTML = three + " wins!";
    } else if (three && three === five && five === seven) {
        document.getElementById("result").innerHTML = three + " wins!";
    } else if (four && four === five && five === six) {
        document.getElementById("result").innerHTML = four + " wins!";
    } else if (seven && seven === eight && eight === nine) {
        document.getElementById("result").innerHTML = seven + " wins!";
    } else if (one && two && three && four && five && six && seven && eight && nine) {
        document.getElementById("result").innerHTML = "Match draw!";
    }
}

