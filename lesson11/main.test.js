const Calculator = require('./Calculator.js');
/*test('Test 1', ()=> {
    console.log('Test message 1')
})

test('add 1+2 equals 3', ()=> {
    const result = 1+3
    expect(result).toBe(3);
})
*/

test('add function returns 10 when with numbers [5, 5]', () => {
    const result = Calculator.add(5,5)
    expect (result).toBe(10);
})