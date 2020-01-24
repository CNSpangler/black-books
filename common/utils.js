import cart from "../data/cart.js";
import books from '../data/books.js';

// tried to write it using .find; did not work
// export function findById(items, id) {
//     const match = items.find((thisItem) => {
//         if (thisItem.id === someId) {
//             return true;
//         } else {
//             return null;
//         }
//     });
// }

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        } 
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function calcLineItem(quantity, price) {
    const lineTotal = (quantity * price);
    Math.round(lineTotal * 100);
    return lineTotal;
}

export function calcOrderTotal(cart, books) {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const book = findById(books, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, book.price);
        orderTotal += lineTotal;
        Math.round(lineTotal * 100);
    }
    return toUSD(orderTotal);
}