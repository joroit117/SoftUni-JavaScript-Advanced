function colorize() {
    let rows = document.querySelectorAll('tr');
    let rowsArray = Array.from(rows);
    rowsArray.forEach((element, i) => {
         if(i % 2 != 0){
             element.style.backgroundColor = 'teal';
         }
    });
}