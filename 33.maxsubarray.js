function subarray(nums){
                let maxsum=-Infinity
                let curr=0;
                for(let i=0;i<nums.length;i++){
                    curr=Math.max(curr+nums[i],nums[i])
                    maxsum=Math.max(curr,maxsum);
                }
                return maxsum;
            }
            let arr=[2,-2,3,5,1,-6,7,9]
            console.log(subarray(arr))
