const numbers = [11, 13, 15, 17, 19, 21, 23];

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const sum = numbers.reduce((total, value, index, array) => {
    return total + value;
}, 0)

console.log(sum);










