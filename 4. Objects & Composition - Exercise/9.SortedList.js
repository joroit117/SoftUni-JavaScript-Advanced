function createSortedList(){
    let list = {
        arr: [],
        add(element){
            this.arr.push(element);
            return this.arr.sort((a, b) => a - b);
        },
        remove(index){
            if(index >= 0 && index < this.arr.length){
                this.arr.splice(index, 1);
            }
            else{
                throw new Error('Index outside boundary!');
            }
            return this.arr.sort((a, b) => a - b);
        },
        get(index){
            if(index >= 0 && index < this.arr.length){
                return this.arr[index];
            }
            else{
                throw new Error('Index outside boundary!');
            }
        },
        size(){
            return this.arr.length;
        }
    }
    return list;
}