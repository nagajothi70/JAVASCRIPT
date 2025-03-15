        
let results=document.createElement('div')
results.id="result";
document.getElementById('one').appendChild(results)
function clicktii(){
    let r=document.getElementById("two")
    let city=r.options[r.selectedIndex].value;
    let population=0;
    let  literacyRate=0;
    let language="";
    switch(city){
        case "bengaluru":
        population = 8443675;
            literacyRate = 88.71;
            language = 'Kannada';
            break;
            case "madurai":
            population = 12442373;
        literacyRate = 89.73;
        language = 'Marathi';
break;
case "chennai":
population = 4646732;
           literacyRate = 90.20;
           language = 'Tamil';

           break;
    }
let text= `the indian city of ${city} has a popution of ${population} . language spoken is ${language
} and literacy rate is ${literacyRate }`
    document.getElementById("result").innerHTML=text;
}
