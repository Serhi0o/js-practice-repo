function checkOrder (available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods."    
    };

    if (ordered === 0) {
        return "Your order is empty."
    };

    if (ordered <= available) {
        return "Your order is accepted."
    };
};

console.log(checkOrder(11, 12));
console.log(checkOrder(15, 0));
console.log(checkOrder(19, 18));