// The find() mrthod returns the value of the first array element that passesa text function.


const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 9000},
    {id: 3, name: 'watch', price: 7000},
    {id: 4, name: 'camera', price: 20000}
];

const medium = products.find(product => product.price < 10000);
const mediumAll = products.filter(product => product.price < 10000);
console.log(medium);
console.log(mediumAll);