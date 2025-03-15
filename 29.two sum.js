 function twosums(nums,target){
                let map = new Map()
                for(let i=0;i<nums.length;i++){
                    let complement=target-nums[i]
                    if(map.has(complement)){
                        return [map.get(complement),i]}
                     map.set(nums[i],i)   
                    
                }
            }
            let arr=[1,2,3,4,5,6,7]
            let target=9
           let hi= twosums(arr,target)
           console.log(hi)
