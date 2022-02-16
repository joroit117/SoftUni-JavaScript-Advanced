function solve(arr){
    numbersArray = [];
    operatorsArray = [];
    for (const element of arr) {
        if(typeof(element) == 'number'){
            numbersArray.push(element);
        }
        else{
            operatorsArray.push(element);
        }
    }
    while(true){
        if(numbersArray.length == 1 && operatorsArray.length == 0){
            console.log(Math.ceil(numbersArray[0]));
            break;
        }
        else if(numbersArray.length == 0){
            console.log('Error: not enough operands!');
            break;
        }
        else if(numbersArray.length > 1 && operatorsArray.length == 0){
            console.log('Error: too many operands!');
            break;
        }
        let result = 0;
        let number2 = numbersArray.pop();
        if(numbersArray.length == 0){
            console.log('Error: not enough operands!');
            break;
        }
        let number1 = numbersArray.pop();
        let opperand = operatorsArray.pop();
        switch(opperand){
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
        }
        numbersArray.push(result);
    }
}
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);