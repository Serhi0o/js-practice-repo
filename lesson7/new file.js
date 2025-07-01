let numberArray = [1, 0, 71, 18, -2, 0, 0, -10.5, 0, 12, 22];
positiveNumbers = 0;
negativeNumbers = 0;
zeros = 0;

for (let i=0; i<numberArray.length; i++) {
    const currentNumber = numberArray[i]
    if (currentNumber<0) {
        negativeNumbers++
    } else if 
        (currentNumber>0) {
        positiveNumbers++
    } else {
        zeros++
    }
};

console.log(`Positive numbers: ${positiveNumbers}`);
console.log(`Negative numbers: ${negativeNumbers}`);
console.log(`0 numbers: ${zeros}`);