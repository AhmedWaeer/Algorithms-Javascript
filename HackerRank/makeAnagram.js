
function makeAnagram(a, b) {
    let counter =0;
      var map = {};
    
    for(let i=0; i<a.length; i++){
        if(map[a[i]]){
            map[a[i]]++;
        }else{
            map[a[i]]=1;
        }
    }
    console.log(map)
    for(let i=0; i<b.length; i++){
        if(map[b[i]]){
            map[b[i]]--
        }else{
            counter++;
            console.log(counter)
        }
    }
    console.log(map)
    for(let k in map ){
        counter+= map[k]
        console.log(counter)
    }
    console.log(map)
    return counter
    };
    