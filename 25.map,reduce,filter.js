// map= executes call back for
            // each array element and returns new array
let arr=[1,2,3,4,5]
let ans=arr.map(x=> x*2)
console.log(ans)
// instead of arrow function we can also direct arrow function
let ans1=arr.map(convert)
function convert(val){
    return val*2
}
console.log(ans1)

// map in array of objects 
let input=[{name:'jothi',age:20},
    {name:"rithika",age:30},
    {name:"pavi",age:40},
    {name:"ram",age:50},
    {name:"sumathi",age:40}
]
let ages=input.map(x=>x.age +" age")
console.log(ages)
// map and filter are little same
// lets see about filter= returns new array by checking 
//each value of original arr using call back function 
let grr=[23,56,298,56,78,998]
 let frr=grr.filter((x)=> {
   return x<99})
console.log(frr)




//lets see about reduce= executes reducer 
//callback and returns accumulated result
// that 1000 is default value if we need that also added 
//we can use orelse no need 
// like in array this also have index,arr option 
 console.log("reduce")
let cost=[34,345,567,32,67,456]
let carttot=cost.reduce((first,el,index,cost)=>
     first+el,1000
)
console.log(carttot)

// same above coding if we need to use curly  braces
let coste=[34,345,567,32,67,456]
let carttote=coste.reduce((first,el,index,coste)=>{
      return first+el
},1000)
console.log(carttote)
// another example
arr2d=[
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"]
]
// flat()= used to convert multi dimensional array 
// to single dimensions
let vrr=arr2d.flat();
console.log(vrr)

let count=arr2d.flat().reduce((first,ell)=>{
    if(first[ell])
    first[ell]++
else first[ell]=1
return first
},{})
console.log(count)



//more examples

const values = [0, 1, false, '', null, 'Hello', undefined];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, 'Hello']  

//explanation for above code

// Array with Mixed Values:

// values = [0, 1, false, '', null, 'Hello', undefined] is an array containing different types of elements, including:
// Numbers (0, 1)
// Boolean values (false)
// Empty string ('')
// null
// Non-empty string ('Hello')
// undefined
// Using filter(Boolean):

// The filter() function creates a new array with all the elements that pass the test provided by the function inside it.
// Here, we are passing Boolean as the test function to filter().
// How Boolean works:

// The Boolean function is a built-in JavaScript function that converts a value to its boolean equivalent:
// If a value is falsy (like 0, false, null, undefined, '', NaN), it will be converted to false.
// If a value is truthy (like 1, 'Hello', objects, arrays), it will be converted to true.
// How filter() works with Boolean:

// When filter(Boolean) is applied to the array, it checks each element and includes only the elements that are truthy (i.e., those that evaluate to true when passed through Boolean).
// Falsy values are excluded (they evaluate to false).
// Which values are excluded (falsy)?

// 0 → falsy
// false → falsy
// '' (empty string) → falsy
// null → falsy
// undefined → falsy
// Which values are included (truthy)?

// 1 → truthy
// 'Hello' → truthy


// there are 3 task bending

