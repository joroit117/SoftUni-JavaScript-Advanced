function solve(commands){
    let objects = [];
    for (const command of commands) {
        let elements = command.split(' ');
        let obj = solution(objects);
        if(elements.length == 2 && elements[0] == 'create'){
            obj[elements[0]](elements[1]);
            obj['done']();
        }else if(elements.length == 2 && elements[0] == 'print'){
            obj[elements[0]](elements[1]);
        }else if(elements.length == 4 && elements[0] == 'create'){
            obj[elements[0]](elements[1]);
            obj[elements[2]](elements[3]);
            obj['done']();
        }else if(elements.length == 4 && elements[0] == 'set'){
            obj[elements[0]](elements[1], elements[2], elements[3]);
        }
    }

    function solution(objects){
        let obj = {};
        
        return{
            create(name){
                obj.name = name;
            },
            inherit(parentName){
                for (const object of objects) {
                    if(object.name == parentName){
                        obj.prototype = object;
                    }
                }
            },
            done(){
                objects.push(obj);
            },
            set(name, key, value){
                for (const object of objects) {
                    if(object.name == name){
                        object[key] = value;
                    }
                }
            },
            print(name){
                for (const object of objects) {
                    let result = '';
                    if(object.name == name){
                        for (const key of Object.keys(object)) {
                            if(key != 'name'){
                                if(key != 'prototype'){
                                    result += `${key}:${object[key]},`;
                                }
                            }
                        }
                        if(object.prototype != undefined){
                            for (const key of Object.keys(object.prototype)) {
                                if(key != 'name' && key != 'prototype'){
                                    result += `${key}:${object.prototype[key]},`;  
                                }                                
                            }
                            if(object.prototype.prototype != undefined){
                                for (const key of Object.keys(object.prototype.prototype)) {
                                    if(key != 'name' && key != 'prototype'){
                                        result += `${key}:${object.prototype.prototype[key]},`;  
                                    }                                 
                                }
                            }
                        }
                    }
                    result = result.substring(0, result.length - 1);
                    if(result != ''){
                        console.log(result);
                    }
                }
            }
        }
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);