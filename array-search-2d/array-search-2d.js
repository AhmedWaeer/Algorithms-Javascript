// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    let y = 0;
    for (var i = 0; i < arr.length; i++) {

        for (var index = 0; index < arr[i].length; index++) {

            if (arr[i][index] === "X") {
                y++;
            }
        }

    }


    return y;
}