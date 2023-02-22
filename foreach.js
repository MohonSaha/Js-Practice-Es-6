// forEach returns undefined. So we can not store it in any variables.

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 9000},
    {id: 3, name: 'watch', price: 7000},
    {id: 4, name: 'camera', price: 20000}
];

products.forEach(x => console.log(x.price));