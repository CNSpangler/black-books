import { findById } from '../common/utils.js';

// import { findById } from '../common/utils';

// let lineItem = findById(somethignggngn, somethidgdgghghd)

function renderBook(books) {
    const li = document.createElement('li');
    li.id = books.id;
    li.className = books.type;
    li.title = books.title;

    const h3 = document.createElement('h3');
    h3.textContent = books.title;
    li.appendChild(h3);

    const h5 = document.createElement('h5');
    h5.textContent = `by ${books.author}`;
    li.appendChild(h5);

    const img = document.createElement('img');
    img.src = '../assets/' + books.image;
    img.alt = books.title;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = books.price;

    const usd = '$' + books.price;
    p.textContent = usd;

    const button = document.createElement('button');
    button.value = books.id;
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
        let cartItem = findById(cart, books.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartItem = {
                id: books.id,
                quantity: 1,
            };

            cart.push(cartItem);
        }

        schroedingersCart = JSON.stringify(cart);
        localStorage.setItem('CART', schroedingersCart);

        alert('1 copy of ' + books.title + ' added to cart.');
    });
    
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBook;