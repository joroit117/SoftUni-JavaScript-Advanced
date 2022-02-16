function solve(arrayOfProducts){
    let output = {};
    for (let i = 0; i < arrayOfProducts.length; i += 2) {
        let food = arrayOfProducts[i];
        let cals = Number(arrayOfProducts[i + 1]);
        if (!output[food]) {
            output[food] = 0;
        }
        output[food] += cals;
    }
    console.log(output);
}
solve(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);