function calculate(){
            let n=document.getElementById("two").value;
            let result=document.getElementById("four");
            let rate=0;
            if(n<3){
rate=5.8;
            }
            else if(n>=3&&n<=6){
                rate=6.5;
            }
            else if(n>=7&&n<=9){
                rate=6.8;
            }
            else{
                rate=7;
            }
            result.innerHTML=rate+" %";
        }
