function solve(catalogue){
    sortedCatalogue = [];
    for (const element of catalogue) {
        let [product, price] = element.split(' : ');
        price = Number(price);
        sortedCatalogue.push({product, price});
    };
    sortedCatalogue.sort(function(a, b){
        let productA = a.product.toUpperCase();
        let productB = b.product.toUpperCase();
        if(productA < productB){
            return -1;
        }
        if(productA > productB){
            return 1;
        }
        return 0;
    });
    let letter = sortedCatalogue[0].product[0].toUpperCase();
    console.log(letter);
    for (const element of sortedCatalogue) {
        if(letter != element.product[0].toUpperCase()){
            console.log(element.product[0].toUpperCase());
            letter = element.product[0].toUpperCase();
        }
        console.log(`  ${element.product}: ${element.price}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);