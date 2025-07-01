/*
Створіть масив чисел
Використовуючи filter, створіть новий масив, що містить лише парні числа.
Виведіть результат у консоль.
*/

const randomArray = [1, 22, -5, 0, -0.22, 5, -13, -6, -16, 2];
const evenNumbers = randomArray.filter((num) => num%2 === 0);
console.log(evenNumbers);