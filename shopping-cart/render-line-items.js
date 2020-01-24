import { toUSD } from '../common/utils.js';
import books from '../data/books.js';

export default function renderLineItems(lineItem, book) {
    const tr = document.createElement('tr');
    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const itemCell = document.createElement('td');
    itemCell.textContent = book.title;
    tr.appendChild(itemCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(book.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    const total = lineItem.quantity * book.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}


// This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example:

// Copy html from the page
// Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your findById function to locate the product and use as your input to your function
// Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<tr> for the line item)
// Make the test pass! (Again, you may need to adjust html syntax - pay close attention to test details)
// git add, commit, push}