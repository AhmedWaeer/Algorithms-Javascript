function compareTriplets(a, b) {
    // Write your code here
    const score = [0,0]
    for(let i=0 ; i< a.length ; i++){
    a[i] < b[i]? score[1]++:a[i] > b[i]?score[0]++: score[1]=score[1]
    }
return score
}