import Gadget from './Gadget.js';

 export default class Smartphone extends Gadget {
        constructor(brand, model, year, operatingSystem) {
            super(brand, model, year)
            this.operatingSystem = operatingSystem;
        };

        getInfo() {
        console.log(`The Gadget's brand: ${this.brand}. The model: ${this.model}. Year: ${this.year}. The operating system: ${this.operatingSystem}`)
    };
};

const smartphone = new Smartphone('Apple', 'iPhone 12 Pro', 2020, 'iOS');
smartphone.getInfo();

