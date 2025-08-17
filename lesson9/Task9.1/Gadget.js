/*
Завдання 1
Створіть клас Gadget, який має такі властивості:
brand (бренд гаджета)
model (модель)
year (рік випуску)
Додайте метод getInfo(), який повертає рядок із повним описом гаджета.
Створіть клас Smartphone, який успадковує Gadget і додає нову властивість:
operatingSystem (операційна система)
Перевизначте метод getInfo() у Smartphone, щоб він враховував operatingSystem.
Створіть кілька екземплярів обох класів і викличте getInfo() для кожного.
*/
export default class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    };

    getInfo() {
        console.log(`The Gadget's brand: ${this.brand}. The model: ${this.model}. Year: ${this.year}`)
    };
};

  