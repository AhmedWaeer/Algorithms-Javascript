// Write code to create A function that accepts two arrays of numbers Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {

  let  obj={};
  let arr =[];

  for(var i=0 ; i<arr1.length ;i++){
      let x = arr1[i];
               obj[x]=x;
  }
for (let index = 0; index < arr2.length; index++) {
    const y = arr2[index];
    if(y in obj){
        arr.push(y)
    }
    
}
return arr


};
