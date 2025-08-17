/*
Завдання 3: 
Створіть статичний метод getOldestGadget(gadgetsArray) у класі Gadget, який:
Приймає масив гаджетів (екземплярів Gadget та Smartphone).
Повертає гаджет, випущений найраніше.
Викличте цей метод, передавши масив об'єктів.
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

  