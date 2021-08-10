function rotateLeft(d, arr) {
    // Write your code here
    const arr2=[]
  
    for(let i =0 ; i<d ; i++){
const shifted = arr.shift();
arr2.push(shifted);
}
const arr3 = arr.concat(arr2)
return arr3
}

