 try{
                num=prompt("enter a number:")
                if(isNaN(num)){
                    throw "enter the valid number"
                }
                if(num===''){
                    throw " connot be empty"
                }
                console.log(num*2)
            }
            catch(err){
                console.log(err)
            }
            
            finally{
                console.log("bye")
            }
           //  wheather if pass or fails finally will be excuted at last


           // if we enter string throw is worked 
           // if we not entered anything then anther throw is worked
