
            // create set through array 
            arr=[1,2,3,4,5,1,2,4]
             let myset1=new Set(arr)
            console.log(arr) // op [1,2,3,4,5,1,2,4]
            console.log(myset1)// op {1, 2, 3, 4, 5}
            // duplicates will be removed in set

            // example 2 
            // create set without array
            let set2 = new Set();
            set2.add(1)
            set2.add(2)
            set2.add(3)
            set2.add(4)
            set2.add({name:"jothi",roll:24})// we can also add
            set2.add([1,2,3,4])// object and array 
            console.log(set2)
            // use add keyword to add elements in set
            console.log(set2.size)
            // we can also check size of set
            console.log(set2.has(3));
            // we can check availability of element in set
            console.log(set2.delete(4));// 4 is deleted
            console.log(set2)
             
//normal for is not accepted beacuse set is 
// non iteratable and non indexed object
            for(let n of set2){
                console.log(n)
            }
            // we cam also delete set elements 
// if we need to iterate using normal for
//  loop then convert it into array
            // create array using set using Array.from
            let arr2=Array.from(set2)
            console.log(arr2)



//             Methods in Set
// .add(value): Adds a value to the Set (if not already present).
// .delete(value): Removes a value from the Set.
// .has(value): Checks if the Set contains a specific value.
// .clear(): Clears all values from the Set.
// .size: Returns the number of elements in the Set.
const mySet = new Set([1, 2, 3]);

// Add a value
mySet.add(4);

// Delete a value
mySet.delete(2);

// Check if a value exists
console.log(mySet.has(3));  // Output: true

// Get the size of the Set
console.log(mySet.size);  // Output: 3

// Clear all values
mySet.clear();
console.log(mySet.size);  // Output: 0


// . Iteration over Sets
// You can iterate through a Set using:

// forEach method
// for...of loop
// Set iterator methods like .keys(), .values(), and .entries()

const mySet1 = new Set([1, 2, 3]);

// Using forEach
mySet1.forEach((value) => {
  console.log(value);  // Output: 1 2 3
});

// Using for...of
for (let value of mySet1) {
  console.log(value);  // Output: 1 2 3
}


//set union
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union);  // Output: Set { 1, 2, 3, 4, 5 }

//intersection in 2 sets 
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);  // Output: Set { 3 }

// difference in 2 sets
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);  // Output: Set { 1, 2 }


// sorting in set  
const mySet3 = new Set([3, 1, 4, 2]);
console.log([...mySet3].sort());  // Output: [ '1', '2', '3', '4' ]


//set.entries()
const mySet4 = new Set([1, 2, 3]);
const iterator = mySet4.entries();

for (let [key,values] of iterator) {
  console.log(key);  
  console.log(values);
  // Output: [1, 1], [2, 2], [3, 3]
}  
