//const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('one').appendChild(resultdiv)


function display(){
    let r=0;
    const a= document.getElementById("two").value
    if(a<=50){
r=a*0.75;
    }
    else if(a>50&&a<=150){
        let n=a-50;
        r=50*0.75;
        r=r+n*1
    }
    else if(a>150&&a<=250){
    let n=a-50;
    let n1=n-100;
    r=50*0.75;
    r=r+100*1;
    r=r+n1*1.30;
    }
    else{
       let n=a-50;
       let n1=n-100;
       let n2=n1-100;
       r=50*0.75;
       r=r+100*1;
       r=r+100*1.30;
       r=r+n2*1.50;
    }
    document.getElementById('result').innerHTML=r+" units";
}
