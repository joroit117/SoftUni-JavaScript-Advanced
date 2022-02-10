function solve(size){
    if(size == null)size = 5;
    let row = "";
    for(let i = 0; i < size; i++){
        row += '* ';
    }
    for(let j = 0; j < size; j++){
        console.log(row);
    }
}