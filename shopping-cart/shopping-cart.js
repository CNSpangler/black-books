import books from '../data/books.js';
import renderLineItems from './render-line-items.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const tBody = document.querySelector('tbody');
const table = document.querySelector('table');

// check for cart in local storage, put item in cart or generate a cart to fill
const schroedingersCart = localStorage.getItem('CART');
let cart;
if (schroedingersCart) {
    cart = JSON.parse(schroedingersCart);
}
else {
    cart = [];
}

cart.forEach((cartItem) => {
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const cartItem = {
            id: cartItem.id,
            quantity: 1,
        }
    }
    localStorage.add(JSON.stringify(cartItem));
}

// define shoppingCart function to get items from local storage, turn ids into actual books, and generate a filled tr for each
function shoppingCart(cartArray) {
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const book = findById(books, item.id);
        const lineItem = renderLineItems(item, book);
        
        tBody.appendChild(lineItem);
    }
    return tBody;
}



// call shoppingCart and append the new, filled tr to the tBody on the page
shoppingCart(cart);
table.appendChild(tBody);

// calculate total price based on all added line items
const orderTotal = document.getElementById('total');
orderTotal.textContent = calcOrderTotal(cart, books);

