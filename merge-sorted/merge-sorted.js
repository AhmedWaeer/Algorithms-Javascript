// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function(arr1, arr2) {
    const newArr = arr1.concat(arr2).sort((a, b) => a - b);
    return newArr;
};