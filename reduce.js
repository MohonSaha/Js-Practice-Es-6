// Reduce method:

/*
reduce(accumulatorFunction, initial value);
Accumulator Function use two parameters.

*/

/*
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
*/

// How it's work: 

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) =>    {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);
