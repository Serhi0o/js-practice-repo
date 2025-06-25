function handleNum (num, handleEven, handleOdd) {
    if (num % 2 === 0) {
    handleEven(num)
    };
    if (num % 2 === 1) {
    handleOdd(num)
    };
};

const handleEven = (numRandom) => {console.log(`${numRandom} is even`)};
const handleOdd = (numRandom) => {console.log(`${numRandom} is odd`)};

handleNum(5,handleEven, handleOdd);
handleNum(8,handleEven, handleOdd);
