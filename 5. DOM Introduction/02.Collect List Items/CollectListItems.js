function extractText() {
    let scannedElements = document.getElementById('items');
    let result = document.getElementById('result');
    result.textContent = scannedElements.textContent;
}