const products = require("./products");

const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 100);

console.log(totalPrice);

const categoryWiseTotal = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + product.price;
  return acc;
}, {});

console.log(categoryWiseTotal);
