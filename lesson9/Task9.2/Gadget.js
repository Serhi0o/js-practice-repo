/*
Завдання 2: 
У класі Gadget додайте геттери та сеттери для year:
Геттер повертає значення.
Сеттер приймає лише числа від 2000 до поточного року.
Якщо значення некоректне — виводить "Помилка: некоректний рік" і не змінює year.
У класі Smartphone зробіть геттер і сеттер для operatingSystem:
Дозволені значення: "iOS", "Android", "HarmonyOS".
Якщо передано іншу ОС — "Помилка: недоступна операційна система".
Використайте ці сеттери для перевірки значень.
*/
export default class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this._year = year;
    };

    get year () {
        return this._year
    };

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (value>=2000 && value <= currentYear) {
            this._year = value
            console.log('This is a valid year')
        } else {
            console.error('Error: incorrect year')
        }
    };
    
    getInfo() {
        console.log(`The Gadget's brand: ${this.brand}. The model: ${this.model}. Year: ${this.year}`)
    };
};

  