function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');

    let newListElement = document.createElement('li');
    let deleteLink = document.createElement('a');

    newListElement.textContent = inputElement.value;
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newListElement.appendChild(deleteLink);
    listElement.appendChild(newListElement);
}