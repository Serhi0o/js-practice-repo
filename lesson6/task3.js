function createCounter() {
      let count = 0;
    const innerFunction = () => { 
        count++; 
        return count; 
    };

    return innerFunction; 
}

const counter = createCounter(); 

console.log(`Перший виклик: ${counter()}`); 
console.log(`Другий виклик: ${counter()}`);  
console.log(`Третій виклик: ${counter()}`);  
