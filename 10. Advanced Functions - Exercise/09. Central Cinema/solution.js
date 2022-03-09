function solve() {

    let containerElement = document.getElementById('container');
    let buttonElement = containerElement.querySelector('button');

    buttonElement.addEventListener('click', (event) => {
        event.preventDefault();

        let inputElements = Array.from(containerElement.querySelectorAll('input[type="text"]'));

        let name = inputElements[0];
        let hall = inputElements[1];
        let price = inputElements[2];

        if(name.value === '' || hall.value === ''){
            name.value = '';
            hall.value = '';
            price.value = '';
            return;
        }

        if(!Number(price.value)){
            name.value = '';
            hall.value = '';
            price.value = '';
            return;
        }

        let sectionElement = document.getElementById('movies');
        let ulistElement = sectionElement.querySelector('ul');

        let listElement = document.createElement('li');

        let spanElement = document.createElement('span');
        let spanText = document.createTextNode(name.value);
        spanElement.appendChild(spanText);

        let strongHallElement = document.createElement('strong');
        let strongHallText = document.createTextNode(`Hall: ${hall.value}`);
        strongHallElement.appendChild(strongHallText);

        let divElement = document.createElement('div');

        let strongPriceElement = document.createElement('strong');
        let strongPriceText = document.createTextNode(price.value);
        strongPriceElement.appendChild(strongPriceText);

        let inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold';

        let buttonArchiveElement = document.createElement('button');
        buttonArchiveElement.textContent = 'Archive';

        divElement.appendChild(strongPriceElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(buttonArchiveElement);

        listElement.appendChild(spanElement);
        listElement.appendChild(strongHallElement);
        listElement.appendChild(divElement);

        ulistElement.appendChild(listElement);

        name.value = '';
        hall.value = '';
        price.value = '';

        buttonArchiveElement.addEventListener('click', (e) => {
            e.preventDefault();

            if(!Number(inputElement.value)){
                inputElement.value = '';
                return;
            }

            let listElementToRemove = e.target.parentElement.parentElement;

            let totalAmount = inputElement.value * strongPriceElement.textContent;

            let sectionArchiveElement = document.getElementById('archive');
            let ulistArchiveElement = sectionArchiveElement.querySelector('ul');

            let listArchiveElement = document.createElement('li');

            let spanArchiveElement = document.createElement('span');
            let spanArchiveText = document.createTextNode(spanElement.textContent);
            spanArchiveElement.appendChild(spanArchiveText);

            let strongArchiveElement = document.createElement('strong');
            let strongArchiveText = document.createTextNode(`Total amount: ${totalAmount.toFixed(2)}`);
            strongArchiveElement.appendChild(strongArchiveText);

            let buttonDeleteElement = document.createElement('button');
            buttonDeleteElement.textContent = 'Delete';

            listArchiveElement.appendChild(spanArchiveElement);
            listArchiveElement.appendChild(strongArchiveElement);
            listArchiveElement.appendChild(buttonDeleteElement);

            ulistArchiveElement.appendChild(listArchiveElement);
            ulistElement.removeChild(listElementToRemove);

            buttonDeleteElement.addEventListener('click', (ev) => {
                ev.preventDefault();
                ulistArchiveElement.removeChild(ev.target.parentElement);
            });

            let clearButton = sectionArchiveElement.querySelectorAll('button')[1];

            clearButton.addEventListener('click', (e) => {
                Array.from(ulistArchiveElement.querySelectorAll('li')).forEach(x => {
                    ulistArchiveElement.removeChild(x);
                });
            });

        });

    });
}