import Gadget from './Gadget.js';

 export default class Smartphone extends Gadget {
        constructor(brand, model, year, operatingSystem) {
            super(brand, model, year)
            this._operatingSystem = operatingSystem;
        }

         get operatingSystem () {
        return this._operatingSystem
    };

    set operatingSystem(value) {
        const allowedOS = ['iOS', 'Android', 'HarmonyOS'];
        if (allowedOS.includes(value)) { 
            this._operatingSystem = value; 
           
        } else {
            console.error('Error: the opearation system is not available'); 
        }
    };
        getInfo() {
        console.log(`The Gadget's brand: ${this.brand}. The model: ${this.model}. Year: ${this.year}. The operating system: ${this.operatingSystem}`)
    };
};

const myNewSmartphone = new Smartphone('Samsung', 'Galaxy S24', 2024, 'Android');
myNewSmartphone.getInfo();

const oldSmartphone = new Smartphone('Apple', 'iPhone 6', 2014, 'iOS');
oldSmartphone.getInfo();
