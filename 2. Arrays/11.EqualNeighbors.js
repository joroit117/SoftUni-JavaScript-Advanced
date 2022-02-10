function solve(arr){
    let pairs = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == 0 && j == 0){
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
            }
            else if(i == arr.length - 1 && j == arr[i].length - 1){
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            }
            else if(i == 0 && j == arr[i].length - 1){
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            }
            else if(i == arr.length - 1 && j == 0){
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
            }
            else if(i == 0){
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            } 
            else if(j == 0){
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
            }
            else if(i == arr.length - 1){
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            }
            else if(j == arr[i].length - 1){
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            }
            else{
                if(arr[i][j] == arr[i + 1][j]){pairs++;arr[i+1][j] = null;}
                if(arr[i][j] == arr[i][j + 1]){pairs++;arr[i][j+1] = null;}
                if(arr[i][j] == arr[i - 1][j]){pairs++;arr[i-1][j] = null;}
                if(arr[i][j] == arr[i][j - 1]){pairs++;arr[i][j-1] = null;}
            }
        }
    }
    return pairs;
}