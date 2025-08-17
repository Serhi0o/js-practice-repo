import Smartphone from './Smartphone.js';

const myNewSmartphone = new Smartphone('Apple', 'iPhone 15 Pro', 2023, 'iOS');

myNewSmartphone.year = 2025; 
myNewSmartphone.getInfo();

myNewSmartphone.year = 1999; 
myNewSmartphone.getInfo(); 

myNewSmartphone.operatingSystem = 'HarmonyOS'; 
myNewSmartphone.getInfo();

myNewSmartphone.operatingSystem = 'Windows Mobile'; 
myNewSmartphone.getInfo();
