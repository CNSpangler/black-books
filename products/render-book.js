import { findById } from '../common/utils.js';

function renderBook(book) {
    const li = document.createElement('li');
    li.id = book.id;
    li.className = book.type;
    li.title = book.title;

    const h3 = document.createElement('h3');
    h3.textContent = book.title;
    li.appendChild(h3);

    const h5 = document.createElement('h5');
    h5.textContent = `by ${book.author}`;
    li.appendChild(h5);

    const img = document.createElement('img');
    img.src = '../assets/' + book.image;
    img.alt = book.title;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = book.price;

    const usd = '$' + book.price;
    p.textContent = usd;

    const button = document.createElement('button');
    button.value = book.id;
    button.textContent = 'Add';
    
    // add event listener for addButton
    button.addEventListener('click', () => {
        let schroedingersCart = localStorage.getItem('CART');
        let cart;
        
    // check for cart in local storage, put item in cart or generate a cart to fill
        if (schroedingersCart) {
            cart = JSON.parse(schroedingersCart);
        }
        else {
            cart = [];
        }
// find each item and either add a first instance to cart or add 1 to quantity already in cart
        let cartItem = findById(cart, book.id);
        if (!cartItem) {
            cartItem = {
                id: book.id,
                quantity: 1,
            };
            cart.push(cartItem);
        } else {
            cartItem.quantity++;
        }
        
        schroedingersCart = JSON.stringify(cart);
        localStorage.setItem('CART', schroedingersCart);
    

        alert('1 copy of ' + book.title + ' added to cart.');
    });
    
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBook;