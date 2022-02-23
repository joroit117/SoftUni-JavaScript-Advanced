function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');

    let newListElement = document.createElement('li');
    newListElement.textContent = inputElement.value;
    listElement.appendChild(newListElement);
}