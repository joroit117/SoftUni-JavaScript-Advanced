function solve() {
    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let taskInputElement = document.getElementById('task');
        let descriptionInputElement = document.getElementById('description');
        let dateInputElement = document.getElementById('date');
        let containerDiv = document.getElementsByClassName('wrapper')[0];

        if(taskInputElement.value === '' || descriptionInputElement.value === '' || dateInputElement.value === ''){
            return;
        }

        let [startOpenButton, deleteOpenButton] = createOpenElement(taskInputElement, descriptionInputElement, dateInputElement, containerDiv);
        startOpenButton.addEventListener('click', (e) => {
            let articleElement = e.target.parentElement.parentElement;
            let task = articleElement.querySelector('h3').textContent;
            let description = articleElement.querySelectorAll('p')[0].textContent;
            let date = articleElement.querySelectorAll('p')[1].textContent;

            let [deleteInProgressButton, finishInProgressButton] = createInProgressElement(task, description, date, containerDiv);
            removeArticle(e);

            deleteInProgressButton.addEventListener('click', (e) => {
                removeArticle(e);
            });

            finishInProgressButton.addEventListener('click', (e) => {
                let articleElement = e.target.parentElement.parentElement;
                let task = articleElement.querySelector('h3').textContent;
                let description = articleElement.querySelectorAll('p')[0].textContent;
                let date = articleElement.querySelectorAll('p')[1].textContent;

                createCompleteElement(task, description, date, containerDiv);
                removeArticle(e);
            });

        });

        deleteOpenButton.addEventListener('click', (e) => {
            removeArticle(e);
        });
    });
    function createOpenElement(taskInputElement, descriptionInputElement, dateInputElement, containerDiv){
        let task = taskInputElement.value;
        let description = descriptionInputElement.value;
        let date = dateInputElement.value;
        
        let openSection = containerDiv.querySelectorAll('section')[1];
        let openSectionDiv = openSection.querySelectorAll('div')[1];

        let articleElement = document.createElement('article');

        let headingElement = document.createElement('h3');
        headingElement.textContent = task;

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date}`;

        let divButtonsElement = document.createElement('div');
        divButtonsElement.className = 'flex';

        let startButton = document.createElement('button');
        startButton.className = 'green';
        startButton.textContent = 'Start';

        let deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';

        divButtonsElement.appendChild(startButton);
        divButtonsElement.appendChild(deleteButton);

        articleElement.appendChild(headingElement);
        articleElement.appendChild(descriptionParagraph);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(divButtonsElement);

        openSectionDiv.appendChild(articleElement);

        taskInputElement.value = '';
        descriptionInputElement.value = '';
        dateInputElement.value = '';

        return [startButton, deleteButton];
    }
    function createInProgressElement(task, description, date, containerDiv){
        
        let openSection = containerDiv.querySelectorAll('section')[2];
        let openSectionDiv = openSection.querySelectorAll('div')[1];

        let articleElement = document.createElement('article');

        let headingElement = document.createElement('h3');
        headingElement.textContent = task;

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `${description}`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `${date}`;

        let divButtonsElement = document.createElement('div');
        divButtonsElement.className = 'flex';

        let deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';

        let finishButton = document.createElement('button');
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';

        divButtonsElement.appendChild(deleteButton);
        divButtonsElement.appendChild(finishButton);

        articleElement.appendChild(headingElement);
        articleElement.appendChild(descriptionParagraph);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(divButtonsElement);

        openSectionDiv.appendChild(articleElement);

        return [deleteButton, finishButton];
    }
    function createCompleteElement(task, description, date, containerDiv){
        let openSection = containerDiv.querySelectorAll('section')[3];
        let openSectionDiv = openSection.querySelectorAll('div')[1];

        let articleElement = document.createElement('article');

        let headingElement = document.createElement('h3');
        headingElement.textContent = task;

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `${description}`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `${date}`;

        articleElement.appendChild(headingElement);
        articleElement.appendChild(descriptionParagraph);
        articleElement.appendChild(dateParagraph);

        openSectionDiv.appendChild(articleElement);
    }
    function removeArticle(e){
        let div = e.target.parentElement.parentElement.parentElement;
        let article = e.target.parentElement.parentElement;
        div.removeChild(article);
    }
}