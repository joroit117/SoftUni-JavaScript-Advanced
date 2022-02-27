function solve() {
  let textAreas = document.querySelectorAll('textarea');
  let tableBody = document.querySelector('tbody');

  logic(textAreas, tableBody);

  function createParagraphCell(text){
    let cell = document.createElement('td');
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    cell.appendChild(paragraph);
    return cell;
  }

  function getResult(result){
    let decFactorCounter = 0;
    Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach(element => {
      if(element.checked === true){
        let paragraphs = element.parentElement.parentElement.querySelectorAll('p');
        result.boughtFurniture = result.boughtFurniture.concat(paragraphs[0].textContent, ', ');
        result.totalPrice += Number(paragraphs[1].textContent);
        result.avgDecFactor += Number(paragraphs[2].textContent);
        decFactorCounter++;
      }
    });
    result.boughtFurniture = result.boughtFurniture.slice(0, result.boughtFurniture.length - 2);
    result.totalPrice = result.totalPrice.toFixed(2);
    result.avgDecFactor /= decFactorCounter;
    return result;
  }

  function logic(textAreas, tableBody){
    Array.from(document.querySelectorAll('button')).forEach(element => {
      element.addEventListener('click', (e) => {
        if(e.target.textContent === 'Generate'){
          let furnitures = JSON.parse(textAreas[0].value);
          for (const furniture of furnitures) {
            let row = document.createElement('tr');
  
            let imgCell = document.createElement('td');
            let img = document.createElement('img');
            img.src = furniture.img;
            imgCell.appendChild(img);
            row.appendChild(imgCell);
  
            row.appendChild(createParagraphCell(furniture.name));
            row.appendChild(createParagraphCell(furniture.price));
            row.appendChild(createParagraphCell(furniture.decFactor));
  
            let markCell = document.createElement('td');
            let checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            markCell.appendChild(checkBox);
            row.appendChild(markCell);
  
            tableBody.appendChild(row);
          }
        }
        else if(e.target.textContent === 'Buy'){
          let result = {
            boughtFurniture: '',
            totalPrice: 0,
            avgDecFactor: 0
          }
          getResult(result);
          textAreas[1].textContent = `Bought furniture: ${result.boughtFurniture}\nTotal price: ${result.totalPrice}\nAverage decoration factor: ${result.avgDecFactor}`;
        }
      });
    });
  }
}