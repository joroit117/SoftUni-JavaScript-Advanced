function solution(){
    let text = '';
    return{
        append(input){
            text += input;
        },
        removeStart(input){
            text = text.substring(input, text.length);
        },
        removeEnd(input){
            text = text.substring(0, text.length - input);
        },
        print(){
            console.log(text);
        }
    }
}
let secondZeroTest = solution(); 
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();