function solve(arr){
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == j)mainDiagonal += arr[i][j];
            if(i + j == arr.length - 1)secondaryDiagonal += arr[i][j];
        }
    }
    console.log(mainDiagonal + ' ' + secondaryDiagonal);
}