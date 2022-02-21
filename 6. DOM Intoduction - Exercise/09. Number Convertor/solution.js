function solve() {
    let inputElement = document.getElementById('input');
    let selectElement = document.getElementById('selectMenuTo');
    let resultElement = document.getElementById('result');
    
    const binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectElement.appendChild(binaryOption);
    selectElement.appendChild(hexadecimalOption);

    document.getElementsByTagName('button')[0].addEventListener("click", (calculate) => {
        if (selectElement.value === 'binary') {
            resultElement.value = Number(inputElement.value).toString(2);
        } else if (selectElement.value === 'hexadecimal') {
            resultElement.value = Number(inputElement.value).toString(16).toUpperCase();
        }
    });
}