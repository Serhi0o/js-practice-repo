/*
Створіть масив чисел
Використовуючи reduce, обчисліть суму всіх елементів масиву.
Виведіть отриману суму у консоль.
*/

const numbersArray = [1, 3, -2, 5, 0, 0, 0.6, 21, -6];
const sum = numbersArray.reduce((acc, num) => acc + num);
console.log(sum);
