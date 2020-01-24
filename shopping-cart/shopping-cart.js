import books from '../data/books.js';
import renderLineItems from './render-line-items.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const tBody = document.querySelector('tbody');
const table = document.querySelector('table');

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

// get 'CART' from local storage, plug that data into shoppingCart function, append new tBody to table on cart page
const cart = localStorage.getItem('CART');
JSON.stringify(cart);
console.log(cart);
shoppingCart(cart);
table.appendChild(tBody);

// calculate total price based on all added line items
const orderTotal = document.getElementById('total');
orderTotal.textContent = calcOrderTotal(cart, books);

