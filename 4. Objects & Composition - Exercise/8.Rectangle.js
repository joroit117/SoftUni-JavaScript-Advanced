function rectangle(width, height, color){
    let colorFirstUpper = color.charAt(0).toUpperCase() + color.slice(1);
    let rect = {
        width: width,
        height: height,
        color: colorFirstUpper,
        calcArea(){
            return this.width * this.height;
        }
    }
    return rect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());