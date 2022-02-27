function solve() {
    Array.from(document.querySelectorAll('button')).forEach(element => {
        element.addEventListener('click', (e) => {
            if(e.target.textContent === 'Quick Check'){
                check();
            }
            else{
                clear();
            }
        });
    });

    function check(){
        let matrix = [];
        createMatrix(matrix);
        let tableElement = document.querySelector('table');
        let resultParagraph = document.getElementById('check').querySelector('p');    

        if(solvedOrNot(matrix)){
            tableElement.style.border = '2px solid green';
            resultParagraph.textContent = 'You solve it! Congratulations!';
            resultParagraph.style.color = 'green';
        }else{
            tableElement.style.border = '2px solid red';
            resultParagraph.textContent = 'NOP! You are not done yet...';
            resultParagraph.style.color = 'red';

        }
    }

    function createMatrix(matrix){
        let sudokuElements = Array.from(document.querySelectorAll('input[type="number"]'));
        let row = [];
        for(let i = 0; i < sudokuElements.length; i++){
            row.push(Number(sudokuElements[i].value));
            if((i + 1) % 3 == 0){
                matrix.push(row);
                row = [];
            }
        }
        return matrix;
    }
    
    function solvedOrNot(matrix){
        let checkRows = true;
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] === matrix[i][1] || matrix[i][0] === matrix[i][2] || matrix[i][1] === matrix[i][2]){
                checkRows = false;
            }
        }
        let checkCols = true;
        for(let i = 0; i < matrix.length; i++){
            if(matrix[0][i] === matrix[1][i] || matrix[0][i] === matrix[2][i] || matrix[1][i] === matrix[2][i]){
                checkCols = false;
            }
        }
        if(checkRows && checkCols){
            return true;
        }
        else{
            return false;
        }
    }

    function clear(){
        let tableElement = document.querySelector('table');
        let resultParagraph= document.getElementById('check').querySelector('p');
    
        Array.from(document.querySelectorAll('input[type="number"]')).forEach(element => {
            element.value = '';
        });
        tableElement.style.border = 'none';
        resultParagraph.textContent = '';
    }
}