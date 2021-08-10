//LeetCode problem #3 — Longest substring without repeating characters (JavaScript)


    var lengthOfLongestSubstring = function(s) {
        let max = 0
        let begin = 0
        // Initialise a Set to store the characters
        let characterSet = new Set();
        
        for(var end =0 ; end < s.length ; end++){
            
            while(characterSet.has(s[end])){
                characterSet.delete(s[begin])
                begin++;
            }
        characterSet.add(s[end])
            max = Math.max(max, end-begin+1)
        }
    
        return max;
    }
        