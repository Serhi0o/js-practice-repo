//Function declaration
function rectangleSquare1 (width, height) {
    return width * height
};
console.log(rectangleSquare1(5, 7));

//Function expression
const rectangleSquare2 = function(width, height) {
    return width * height
};
console.log(rectangleSquare2(4, 2));

//Arrow Function
const rectangleSquare3 = (width, height) => width * height;
console.log(rectangleSquare3(1, 77));
