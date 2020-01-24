import { toUSD } from '../common/utils.js';

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