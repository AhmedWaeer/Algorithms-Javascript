
//Two words are anagrams of one another if their letters can be rearranged to form the other word.
//Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

function anagram(s) {
    let mid = Math.floor(s.length/2)
    let firstHalf = s.substring(0,mid)
    let secondHalf = s.substring(mid)
    let count=0;
    
    if (s.length%2 !== 0){
        return -1
    }
    for(let i =0; i<firstHalf.length; i++){
        secondHalf.includes(firstHalf[i])? secondHalf=secondHalf.replace(firstHalf[i],""): count++;
        }
    return count
    }