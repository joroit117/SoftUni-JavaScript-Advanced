function solve(arr = []){
    let output = "";
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0)output += arr[i] + ' ';
    }
    console.log(output);
}
