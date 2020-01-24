import cart from '../data/cart.js';
import books from '../data/books.js';
import renderLineItems from './render-line-items.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const tBody = document.querySelector('tbody');
const table = document.querySelector('table');

function shoppingCart(cartArray) {
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const book = findById(books, item.id);
        const lineItem = renderLineItems(item, book);
        
        tBody.appendChild(lineItem);
    }
    return tBody;
}

const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

shoppingCart(cart);
table.appendChild(tBody);

const orderTotal = document.getElementById('total');
orderTotal.textContent = calcOrderTotal(cart, books);

