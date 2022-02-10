function solve(arr){
    let biggestElement = Number.MIN_VALUE;
    for(let i = 0; i < arr.length; i++){
        let row = arr[i];
        for(let j = 0; j < row.length; j++){
            if(row[j] > biggestElement)biggestElement = row[j];
        }
    }
    return biggestElement;
}