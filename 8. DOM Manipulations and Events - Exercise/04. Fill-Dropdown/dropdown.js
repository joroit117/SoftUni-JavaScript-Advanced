function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');
    appendMenu(newItemTextElement.value, newItemValueElement.value);

    function appendMenu(text, value){
        let menu = document.getElementById('menu');

        let option = document.createElement('option');
        option.textContent = text;
        option.value = value;

        menu.appendChild(option);
    }
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}