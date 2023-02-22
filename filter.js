
// The filter method creates a new array with array element that passed a test.

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 9000},
    {id: 3, name: 'watch', price: 7000},
    {id: 4, name: 'camera', price: 20000}
];

const expensive = products.filter(x => x.price > 10000);
console.log(expensive);