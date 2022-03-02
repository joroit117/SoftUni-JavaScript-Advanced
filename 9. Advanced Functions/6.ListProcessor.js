function solve(input){
    let obj = solution();
    
    for (const command of input) {
        let [func, text] = command.split(' ');
        obj[func](text);
    }

    function solution(){
        let text = [];
        return{
            add(string){
                text.push(string);
            },
            remove(string){
                text = text.filter(x => x != string);
            },
            print(){
                let result = '';
                text.forEach(x => result += x + ',');
                result = result.substring(0, result.length - 1);
                console.log(result);
            }
        }
    }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);