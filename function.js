const products = [
    {id: 1, name: 'xiami phone ONe night', price:19999},
    {id: 2, name: 'iphone', price:19999},
    {id: 3, name: 'lenovo yoga laptop 2025', price:19999},
    {id: 4, name: 'Dell inspiron lapto', price:19999},
    {id: 5, name: 'Samsung phone note 7', price:19999},
    {id: 6, name: 'Nokia old age Phone gone', price:19999},
    {id: 7, name: 'phone one', price:19999},
    {id: 8, name: 'M1 chip not cheap LapTop', price:19999},
    {id: 9, name: 'mac book air', price:19999},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);    