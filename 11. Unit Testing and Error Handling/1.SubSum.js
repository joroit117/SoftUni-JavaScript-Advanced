function solve(numbers, startIndex, endIndex){
    if(!Array.isArray(numbers)){
        return NaN;
    }

    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, numbers.length - 1);

    return numbers
    .slice(start, end + 1)
    .map(Number)
    .reduce((a, x) => a + x, 0);
}
solve([], 1, 2);