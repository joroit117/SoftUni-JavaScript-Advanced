function sumTable() {
    let prices = document.querySelectorAll('tr td:nth-of-type(2)');
    let sumElement = document.getElementById('sum');

    let pricesList = Array.from(prices);
    pricesList.pop();
    let sum = 0;
    for (const price of pricesList) {
        sum += Number(price.textContent);
        sumElement.textContent = sum;
    }
}