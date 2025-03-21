const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Dave', age: 40 }
  ];
  
  // Step 1: Filter users older than 30
  const filteredUsers = users.filter(user => user.age > 30);
  
  // Step 2: Map to get their ages
  const ages = filteredUsers.map(user => user.age);
  
  // Step 3: Sum the ages using reduce
  const totalAge = ages.reduce((acc, age) => acc + age, 0);
  
  console.log(totalAge); // 75 (35 + 40)
