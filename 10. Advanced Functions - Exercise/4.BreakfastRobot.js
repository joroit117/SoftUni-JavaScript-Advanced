function solution(){
    let microELements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function(input){
        let commands = input.split(' ');
        if(commands[0] == 'restock'){
            microELements[commands[1]] += Number(commands[2]);
            return 'Success';
        }else if(commands[0] == 'prepare'){
            let meal = commands[1];
            let quantity = Number(commands[2]);
            return prepare(meal, quantity);
        }
        else if(commands[0] == 'report'){
            return `protein=${microELements['protein']} carbohydrate=${microELements['carbohydrate']} fat=${microELements['fat']} flavour=${microELements['flavour']}`;
        }
    }

    function prepare(meal, quantity){
        let isPrepared = true;
        let returnValue = 'Success';
        Array.from(Object.entries(meals)).forEach(x => {
            if(x[0] == meal && isPrepared == true){
                Array.from(Object.entries(x[1])).forEach(y => {
                    if(microELements[y[0]] < y[1] * quantity && isPrepared == true){
                        isPrepared = false;
                        returnValue = `Error: not enough ${y[0]} in stock`;
                    }else if(isPrepared == true){
                        microELements[y[0]] -= (y[1] * quantity);
                    }
                });
            }
        });
        return returnValue;
    }
}
let manager = solution ();
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
