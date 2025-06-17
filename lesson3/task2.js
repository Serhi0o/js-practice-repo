const maxAge = 30;
const minAge = 10;
const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

const isAdult = Boolean(age>=18);
console.log(`The age is ${age}`);
console.log(`It is ${isAdult} that the person is an adult`);
