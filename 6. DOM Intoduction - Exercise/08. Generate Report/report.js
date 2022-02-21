function generateReport() {
    let checkBoxElements = Array.from(document.querySelectorAll('input'));
    let tableElements = Array.from(document.querySelectorAll('tbody td'));
    let outputElement = document.getElementById('output');

    let output = [];

    let columns = [];
    let allColumnsCounter = 0;

    for (let i = 0; i < checkBoxElements.length; i++) {
       if(checkBoxElements[i].checked){
           let col = {
               name: checkBoxElements[i].name,
               index: i
           }
           columns.push(col);
       }
       allColumnsCounter++;
    }
    
    for(let i = 0; i < tableElements.length; i += allColumnsCounter){
        let obj = {};
        for (const column of columns) {
            obj[column.name] = tableElements[column.index + i].textContent;
        }
        output.push(obj);
    }
    let parsedOutput = JSON.stringify(output);
    outputElement.textContent = parsedOutput;
    
}
/*function generateReport() {
    let checkBoxElements = Array.from(document.querySelectorAll('input'));
    let tableElements = Array.from(document.querySelectorAll('tbody td'));
    let output = [];

    let rows = [];
    let row = [];

    for(let i = 0; i < tableElements.length; i++){
        if(i % 7 == 0){
            rows[i - 7] = new Array(row);
            row = [];
        } 
        row.push(tableElements[i].textContent);
    }

    let columns = [];
    for (let i = 0; i < checkBoxElements.length; i++) {
       if(checkBoxElements[i].checked){
           let col = {
               name: checkBoxElements[i].name,
               index: i
           }
           columns.push(col);
       }
    }
    console.log(rows);
    for(let j = 0; j < rows.length; j++){
        let obj = {};
        for (const column of columns) {
            //console.log(rows[j, column.index]);
            obj[column.name] = rows[j, column.index];
        }
        //output.push(obj);
    }
    console.log(output);
}*/