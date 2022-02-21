function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let output = '';
  
  switch(currentCase){
    case 'Camel Case':
      for(let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          output += (input[i + 1].toUpperCase());
          i++;
        }
        else{
          output += (input[i].toLowerCase());
        }
      }
      break;
    case 'Pascal Case':
      output += (input[0].toUpperCase());
      for(let i = 1; i < input.length; i++){
        if(input[i] === ' '){
          output += (input[i + 1].toUpperCase());
          i++;
        }
        else{
          output += (input[i].toLowerCase());
        }
      }
      break;
    default:
      output = 'Error!';
  }

  let result = document.getElementById('result');
  result.textContent = output;
}

/*function result(input, currentCase){
  let result = [];
  let output = '';
  let inputArray = input.split(' ');
  switch(currentCase){
    case 'Camel Case':
      inputArray.forEach((element, i) => {
        element = element.toLowerCase();
        if(i != 0){
          let firstChar = element.substr(0, 1);
          element = element.slice(1, element.length);
          firstChar = firstChar.toUpperCase();
          element = firstChar.concat(element);
        }
        result.push(element);
      });
      for(let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          output += (input[i + 1].toUpperCase());
          i++;
        }
        else{
          output += (input[i].toLowerCase());
        }
      }
      break;
    case 'Pascal Case':
      inputArray.forEach(element=> {
        element = element.toLowerCase();
        let firstChar = element.substr(0, 1);
        element = element.slice(1, element.length);
        firstChar = firstChar.toUpperCase();
        element = firstChar.concat(element);
        result.push(element);
      });
      output += (input[0].toUpperCase);
      for(let i = 1; i < input.length; i++){
        if(input[i] === ' '){
          output += (input[i + 1].toUpperCase());
          i++;
        }
        else{
          result += (input[i].toLowerCase());
        }
      }
      break;
    default:
      return output = 'Error!';
  }
  for (const element of result) {
    output += element;
  }
  return output;
}*/