// create map 
            let map1=new Map()
            map1.set(1,3);
            map1.set('b',3);// use quotes to iniatize key 
            // use set keyword to add map elements
            map1.set('c',3);
            map1.set('a',4);
            map1.set('a',9);
            // if key appears twice then it will be over written
            console.log(map1)
           // we can also perform size,has,delete as same as set

           // print elements using for
           for(let  n of map1){
            console.log(n)
           }
           // we can also get key and values 
           for( let [k,v] of map1)
           {
            console.log(v)
            console.log(k)
           }

           // alternate direct approach for above 
           for( let  k of map1.keys()){
            console.log(k)
           }

           for( let  k of map1.values()){
            console.log(k)
           }


           // using for each
           map1.forEach((v,k)=>{
console.log("key",k,"value",v)
           })


           // 2d array to map
           let arr2=[[1,2],[4,5]]
           let map3=new Map(arr2)
           console.log(map3)
 

                        
//normal for is not accepted beacuse map is 
// non iteratable and non indexed object
// if we need to iterate using normal for
//  loop then convert it into array
let map2 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

let entries = Array.from(map2); // Convert Map to array of [key, value] pairs

for (let i = 0; i < entries.length; i++) {
    let [key, value] = entries[i];
    console.log(`Key: ${key}, Value: ${value}`);
}

           // refer anagram code for 
           // better representation of map

           let map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map);  // Map { 'name' => 'Alice', 'age' => 25 }


           console.log(map.get('name'));  // Alice
console.log(map.get('age'));   // 25
console.log(map.get('address'));  // undefined (since it doesn't exist)


let map4 = new Map([['key1', 'value1'], ['key2', 'value2']]);

// Using for...of
for (let [key, value] of map4) {
    console.log(key, value);
}
// Output:
// key1 value1
// key2 value2

// Using forEach()
map.forEach((value, key) => {
    console.log(key, value);
});
// Output:
// key1 value1
// key2 value2

let map6 = new Map([['key1', 'value1'], ['key2', 'value2']]);

// Get keys
let keys = map6.keys();
console.log([...keys]);  // ['key1', 'key2']

// Get values
let values = map6.values();
console.log([...values]);  // ['value1', 'value2']

// Get2 entries (key-value pairs)
let entries2= map6.entries();
console.log([...entries]);  // [['key1', 'value1'], ['key2', 'value2']]

let map8 = new Map();

function greet() {
    return 'Hello, World!';
}

map8.set(greet, 'This is a greeting function');
console.log(map8.get(greet));  // This is a greeting function

// You can call the function using the reference
console.log(greet());  // Hello, World!

let map5 = new Map();       // Creates an empty Map
let objKey = { id: 1 };    // An object key { id: 1 }
map5.set(objKey, 'Object as key');  // Adds the object as the key, and the value is 'Object as key'

console.log(map5.get(objKey));  // Retrieves the value associated with objKey, which is 'Object as key'



