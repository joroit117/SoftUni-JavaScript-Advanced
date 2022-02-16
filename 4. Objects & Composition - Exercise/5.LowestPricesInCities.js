function solve(dataArray){
    let products = [];
    for (const row of dataArray) {
        let [city, product, price] = row.split(' | ');
        price = Number(price);
        
        if(products.filter(x => x.product === product).length > 0){
            let obj = products.find(x => x.product === product);
            if(obj.price > price){
                obj.price = price;
                obj.city = city;
            }
        }
        else{
            let obj = {product, city, price};
            products.push(obj);
        }
    }
    for (const product of products) {
        console.log(`${product.product} -> ${product.price} (${product.city})`);
    }
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);