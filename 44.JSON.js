    
        // in json any string should be done within  "" even a property name

        let json6=`[
            {
                "stock":"TCS",
                "price":3500
            },
            {
            "stock":"hcl",
                "price":350
            },
            {
            "stock":"sbi",
                "price":30
            },
            {
            "stock":"zoho",
                "price":9
            }

        ]`


       // JSON.stringify: Converts a JavaScript object into a JSON string.
//JSON.parse: Converts a JSON string back into a JavaScript object.



        console.log(json6)
        let parsed = JSON.parse(json6)
        console.log(parsed)

        let json7=`[
            {
                "stock":"TCS",
                "price":3500
            },
            {
            "stock":"hcl",
                "price":350
            },
            {
            "stock":"sbi",
                "price":30
            },
            {
            "stock":"zoho",
                "price":9
            }

        ]`


       // JSON.stringify: Converts a JavaScript object into a JSON string.
//JSON.parse: Converts a JSON string back into a JavaScript object.



        console.log(json6)
        let parsed11 = JSON.stringify(json7)
        console.log(parsed[1].price)
        console.log(parsed[0].price)
        console.log(parsed[2].stock)
        console.log(parsed[3].price)



//JSON Data Types
// JSON supports the following data types:

// String: "Hello"
// Number: 25
// Boolean: true, false
// Array: ["HTML", "CSS", "JavaScript"]
// Object: { "key": "value" }
// Null: null

const json = { "name": "Nagajothi", "skills": ["HTML", "CSS"] };
console.log(json.name); // Output: Nagajothi
console.log(json["skills"][0]); // Output: HTML



// storing and retrieving from local storage 
const user = { name: "Nagajothi", age: 25 };
const stringy=JSON.stringify(user);
localStorage.setItem("user", stringy);
// always store data as string format 
// in local stroage or else it may cause error


// Retrieve it
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: Nagajothi
// retrieve data from local storage as object and access that
   
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) throw ("Network response was not ok");
    return response.json(); //  used to parse the op from api
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));

//   JSON.parse()
// JSON.parse() is a global JavaScript function that parses a JSON string into a JavaScript object or array.
// When to Use It: You manually use JSON.parse() when you have a JSON string that you need to convert into a JavaScript object.
   

//example two  
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch((err)=>console.log(err));
  

  //try catch in json 
  try {
  const obj = JSON.parse('{"name": "Nagajothi"}');
  console.log(obj);
} catch (error) {
  console.error("Invalid JSON format", error);
}

//copy json objects
const original = { name: "Nagajothi", details: { age: 25 } };
const copy = original;
console.log(copy)


// convert only the needed parameters 
const obj = { name: "John", age: 30, password: "12345" };
console.log(obj.name)
const filteredJson = JSON.stringify(obj, ["name", "age"]);
console.log(filteredJson); // '{"name":"John","age":30}'

// access json data 
const obj1= { name: "John", age: 30 };
console.log(obj1.name); // John
console.log(obj1["age"]); // 30
// add new elements
obj1.city = "New York";
obj1.age = 31;
// delete elements
delete obj.age;
console.log(obj); // { name: 'John', city: 'New York' }

//deep  copy of json 
const original1 = { name: "John", address: { city: "NY" } };
const copy1 = JSON.parse(JSON.stringify(original1));
copy1.address.city = "LA";
console.log(original1.address.city); // NY

// merging two json objects
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { name: 'John', age: 30 }

//iterate over array
const data = { skills: ["JavaScript", "HTML", "CSS"] };
data.skills.forEach(skill =>{ console.log(skill)
});

// filter over array 

const filtered = data.skills.filter(skill => skill.startsWith("J"));
console.log(filtered); // ["JavaScript"]

//  form handling in json
// <form>// html part its here for quick recall
//   <input name="username" value="John">
//   <input name="age" value="30">
// </form>


const form = new FormData(document.querySelector("form"));
const obj3 = {};
form.forEach((value, key) => (obj3[key] = value));
console.log(JSON.stringify(obj3));


// dynamic manipulation 
const key = "name";
const value = "John";
const dynamicObj = { "key": value }; 
//or 
//const dynamicObj = { [key]: value };
console.log(dynamicObj); // { name: 'John' }

// json validation 
function isValidJson(json) {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}
console.log(isValidJson('{"name":"John"}')); // true
console.log(isValidJson("{name:John}")); // false


// nested json object 
const data1 = {
  user: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};
console.log(data1.user.address.city); // New York


//or
const city = data?.user?.address?.city || "Default City";
console.log(city);
   

