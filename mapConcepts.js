const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 9000},
    {id: 3, name: 'watch', price: 7000},
    {id: 4, name: 'camera', price: 20000}
];

const items = products.map(product => product.name);
const price = products.map(p => p.price);
console.log(price);
console.log(items);