 function convert(){
            const b = Number(document.getElementById("two").value);
            const c=b/2.54
            const d=document.getElementById("four");
            d.innerHTML=c.toFixed(2) + " inches";

        }
