function anagram( s, t)
{
    if(s.length!=t.length){
        return false;
    }
    let map1= new Map()
    for(let i=0;i<s.length;i++){
        if(map1[s[i]]){
            map1[s[i]]++
        }
        else{
            map1[s[i]]=1
        }
    }
        for(let j=0;j<t.length;j++){
            if(map1[t[j]]){
                map1[t[j]]--
            }
            else{
                return false
            }
        }
        return true;
    }
    console.log(anagram("apple","platt"))
