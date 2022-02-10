function solve(input1, input2, input3){
    let max = input1;
    if(input2 > max)max = input2;
    if(input3 > max)max = input3;
    console.log('The largest number is ' + max + '.');
}
