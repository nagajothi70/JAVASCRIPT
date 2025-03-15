 let a=10;
                function outer(){
                    let snack="eggpuff"
                    function inner(){
                        console.log("snack:"+snack);
                        console.log("rs:"+a)
                        // this is simple representation where 
                        //global variable and outer function
                        //  variable can also used in inner function
                    }
                    inner(); // inner function 
                    // should be called inside outer function
                }
                outer();
               // inner();// this makes error we cannot
                //  directly invoke inner method

                // example 2 
                // outer func   and inner funct can also contain parameters 
                function name(name){
                    function print(roll){
                        console.log("name:"+name)
                        console.log("reg:"+roll)
                    }
                    print(24);
                }
                name("jothi")
                //

                // example 3
                // we can also return complete inner function to var
                function num1(x){
                    return function num2(y){
                        return x+y;
                    }
                }
                let add=num1(5)
                console.log(add(10))
                let add100=num1(100)
                console.log(add100(105))
                console.log(add100(20))
                console.log(add100(45))

                // we can create n number of var and perform like this
