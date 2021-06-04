// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    let numObj = {}

    const arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            var x = arr[i];
            if (x in numObj) {
                numObj[x]++;
            } else {
                numObj[x] = 1;
            }
        }

        if (arr[i] === '1') {
            var y = arr[i];
            if (y in numObj) {
                numObj[y]++;
            } else {
                numObj[y] = 1;
            }
        }

    }
    if (numObj[x] !== numObj[y]) {
        return false
    } else {
        return true
    }

}