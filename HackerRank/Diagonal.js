function diagonalDifference(arr) {
    // Write your code here
   let sum1=0;
let sum2=0;
let l =arr.length ;
     for(let i = 0; i< arr.length ; i++){
         
         sum1 += arr[i][i]
          sum2 += arr[i][l-1-i]
     }
  return Math.abs(sum1 - sum2)
}
