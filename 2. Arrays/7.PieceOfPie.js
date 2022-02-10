function solve(arr, s1, s2){
    let result = [];
    let index1 = 0, index2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == s1)index1 = i;
        if(arr[i] == s2)index2 = i;
    }
    result = arr.slice(index1, index2 + 1);
    return result;
}