var twoSum = function(nums, target) {
    result = [];
    index_Map = new Map();
    for(var x=0; x < nums.length ; x++){
        let diff = target - nums[x];
        if(index_Map.has(diff)){
           result[0] = x;
        result[1] = index_Map.get(diff)
           }else{
               index_Map.set(nums[x],x)
           }
    } 
return result;
};