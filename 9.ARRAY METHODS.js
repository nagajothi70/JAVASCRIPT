  let arr=[1,2,3,4,5]
            arr.push(6);
            console.log(arr);
            arr.pop();
            console.log(arr);

            arr.shift();
            console.log(arr);
            arr.unshift(1);
            console.log(arr);
            arr.splice(2,1);//start index,from start how many elements to be deleted
            console.log(arr)
            arr.splice(2,1,3)//replace values
            console.log(arr)
            arr.splice(2,2,3,4)//replace multiple values
            console.log(arr)
            arr.splice(4,0,5);
            console.log(arr)// insert  using splice
            arr.splice(5,2,6,7)
            console.log(arr) // insert multiple values using splice
            console.log(arr.slice(1,3))
            console.log(arr.reverse())
            console.log(arr.join())
            let str="g,t,r,h"
            console.log(str.split(","))
            let arr1=[1,2,3,4]
            let arr2=[5,6,7,8]
            console.log(arr1.concat(arr2))
