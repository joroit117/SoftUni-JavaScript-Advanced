function solve(n, k){
    let arr = [1];
    for(let i = 1; i < n; i++){
        let element = 0;
        for(let j = i - 1, counter = 0; j >= 0 && counter < k; j--, counter++){
            element += arr[j];
        }
        arr[i] = element;
    }
    return  arr;
}