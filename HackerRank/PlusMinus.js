function plusMinus(arr) {
    // Write your code here
    let l = arr.length;
    let n =0;
    let p=0;
    let zeros=0;
    for (let i=0 ; i< arr.length ; i++){
        arr[i] < 0? n++: arr[i] > 0? p++: arr[i] === 0? zeros++:zeros
    }
    console.log((p/l).toFixed(6))
    console.log((n/l).toFixed(6))
    console.log((zeros/l).toFixed(6))
}