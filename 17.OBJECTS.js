 let item ={
    name:'phone', // properties
    price:1500,
    quantity:1
}
console.log(item)
// another way to create object

let item2= new Object();
item2.name='iphone'
item2.num=300
console.log(item2)

// accessing object using dot notation 
console.log(item.price)

// modifying values 
item.price=0; 
console.log(item.price)

//adding new property
item.status='buy';
console.log(item)

//square bracket notation (can be used instead of dot notation)
console.log(item['price'])
 
 // adding new property using sqaure notation
 item['cus']="jothi"
 console.log(item)

 // also sqaure notation used to modify values indirectly
 let key='price'
 item[key]=700
 console.log(item)

// object can also contain array,and another object inside it 
let item1 ={
    name:'phone', // properties
    price:1500,
    quantity:1,
     arr:[20,30,40],
    data:{
        sum:"add",
        sub:"minus",
        multi:"product"
    }
}
console.log(item1)
// accessing arr in object
console.log(item1.arr)

// accessing another object inside the object
console.log(item1.data)

let item5={
    name:'phone', // properties
    price:1500,
    quantity:1,
    functionadd(){
        console.log("hi");
    }
}
console.log(item5);
item5.functionadd();
