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
let schroedingersCart = localStorage.getItem('CART');
let cart;
        
if (schroedingersCart) {
    cart = JSON.parse(schroedingersCart);
}
else {
    cart = [];
}

JSON.stringify(cart);
shoppingCart(cart);
table.appendChild(tBody);

// calculate total price based on all added line items
const orderTotal = document.getElementById('total');
orderTotal.textContent = calcOrderTotal(cart, books);

// add functionality to Place Order button
const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', () => {
    if (!schroedingersCart) {
        orderButton.disabled = true;
    } else {
        alert(JSON.stringify(cart, true, 2));
        localStorage.removeItem('CART');
        window.location = '../index.html';
    }
});

