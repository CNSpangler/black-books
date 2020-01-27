import books from '../data/books.js';

// const addProduct = localStorage.addProduct(productsList) {
//     const populatedProducts = localStorage.getItem('PRODUCTS');
//     if (!populatedProducts) {
//         localStorage.setItem('PRODUCTS', books);
//     } else {
//         return populatedProducts;
//     }
// }


export default function addProduct() {
    const productList = localStorage.getItem('PRODUCTS');
    
    if (!productList) {
        localStorage.setItem('PRODUCTS', books);
    }
    getProducts();
}

export function getProducts() {
    const products = localStorage.getItem('PRODUCTS');
    const parsedProducts = JSON.parse(products);
    return parsedProducts;
}



// export default function addProduct() {
//     // get 'PRODUCTS' from local storage
//     let schroedingersProduct = localStorage.getItem('PRODUCTS');
//     let newProductsBucket;
            
//     if (schroedingersProduct) {
//         newProductsBucket = JSON.parse(schroedingersProduct);
//     } else {
//         newProductsBucket = [];
//     }
//     let newItem = whatever form data we grab;
// }

// // find each item and either add a first instance to cart or add 1 to quantity already in cart
// let cartItem = findById(cart, book.id);
// if (!cartItem) {
//     cartItem = {
//         id: book.id,
//         quantity: 1,
//     };
//     cart.push(cartItem);
// } else {
//     cartItem.quantity++;
// }

// schroedingersCart = JSON.stringify(cart);
// localStorage.setItem('CART', schroedingersCart);



//     JSON.stringify(newProduct);
//     renderBook(newProduct);