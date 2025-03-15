 function substring(s){
                let maxlength=0;
                let curr=[];
                for(let i=0;i<s.length;i++){
                    curri=curr.indexOf(s[i])
                    if(curri!=-1){
                        curr.splice(0,curri+1)
                    }
                    curr.push(s[i])
                    maxlength=Math.max(maxlength,curr.length)
                }
                return maxlength;
            }


            console.log(substring("abcaghjkjjabcdef"))
