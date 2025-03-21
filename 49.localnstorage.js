// mainly 2 functions setItem,getItem

localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

const name = localStorage.getItem("name");
console.log(name); // "John"

// removing item in local storage 
localStorage.removeItem("name");
console.log(localStorage.getItem("name")); // null

// clearing all data 
localStorage.setItem("name", "John");
localStorage.clear();
console.log(localStorage.getItem("name")); // null


// checking length of local storage 
console.log(localStorage.length); // 1

// iterating through local storage 
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

// storing and retrie
// const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // "John"

// form in local storage
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  localStorage.setItem("formName", name);
});

const savedName = localStorage.getItem("formName");
if (savedName) {
  document.querySelector("#name").value = savedName;
}
