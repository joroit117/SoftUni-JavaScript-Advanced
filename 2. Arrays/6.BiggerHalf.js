function solve(arr){
    arr.sort((a, b) => a-b);
    let result = arr.slice(arr.length / 2, arr.length);
    return result;
}