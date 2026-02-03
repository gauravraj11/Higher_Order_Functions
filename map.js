const products = require("./products");

const result = products.map((product) => {
    
    return {title:product.title, id: product.id, category:product.category}

});


const result2 = products.filter((i)=> i.category === "electronics" ).filter((j)=> j.rating.rate > 4)

console.log(result2);

