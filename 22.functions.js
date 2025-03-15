
            // basic function
            function add(a,b){
                return a+b;
            }
           console.log(add(5,6));

           // to see content inside function
           console.log(add)

           // to see type of function
           console.log(typeof add)

           // to set default parameter
           function name(name=" there"){
console.log("hi"+name);
           }
           name(" jothi")
           name();

           //recursion function
           function fact(num){
            if(num==1){
                return 1;
            }
            return num*fact(num-1);
           }
           console.log(fact(5))

           //functions expression
           let names = function(name)
           {
console.log(name)
           }
           names("jothi");
           console.log(names)

           // passing array to function expression and count sum of array elements
           let arr=[1,2,3,4,5]
           let arrsum=function(arr){
            let sum=0;
            for( let val of arr){
                sum+=val
            }
            return sum;
           }
           console.log(arrsum(arr))

           // arrow function
           let volumn = (l,b,h)=>{  // compare expression and arrow 
            //function both are same just instead of
            // function keyword we are using arrow 
            //after parameter declaration
            return l*b*h;
           }
           console.log(volumn(1,2,3))

           // if we are going to use only one
           // parameter then we don't need round bracket

           let arrsums = arr => {
            let sums=0;
            for (let val of arr){
                // if(val==1){
                //     return 1
                // }
                sums+=val;
            }
            return sums
           }
           console.log(arrsums(arr))

           // if we just have return statement
           // only then {}  and return aslo not needed 
           let hi= name => 
           "hi"+name;
          console.log( hi(" jothi"))

          // to clear console use 
          //console.clear()

          //variable arguements
          //if we dont know how many arguements 
          ///to use and its dynamic then we can use ...
          // this method is also called rest parameters
          let prod=(...args)=>{
            let sum=0;
            for(let val of args){
                sum+=val;    
                    }
                    return sum
          }
          console.log(prod(1,4,5,7,8))

          // another method 
          let prods=function(){
            let sum=0;
            for(let val of arguments){
                sum+=val;    
                    }
                    return sum
          }
          console.log(prods(1,4,5,7,8))

          // generators
        console.log("generators")
        console.log("every iteration need calling ")
          function* indexgenerator (){
            let index = 1
            while(true){
                yield index++
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          }
          const gen= indexgenerator();
          console.log(gen.next().value)
          console.log(gen.next().value)
          console.log(gen.next().value)
          console.log(gen.next().value)
           
// function expression for generators
           let arrs=function*(num){
            yield "hi "+num;
           }
           
           const gen1= arrs(8);
           console.log(gen1.next().value)
           // arrow function for generators cannot be used 
           // there is no support for yield keyword in arrow function
        
