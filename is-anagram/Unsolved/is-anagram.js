// Write code to create A function that accepts two strings Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    arr1 = strA.split("");
    arr2 = strB.split("");
let obj = {}
   
        let arr3 = arr1.concat(arr2)
        let set = new Set(arr3)
        if (set.size === arr2.length){
            return true
        }
  
 
   return false   
};