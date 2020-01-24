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
        const schroedingersCart = localStorage.getItem('CART');
        let cart;
    // check for cart in local storage, put item in cart or generate a cart to fill
        if (schroedingersCart) {
            cart = JSON.parse(schroedingersCart);
        }
        else {
            cart = [];
        }

    // for each clicked item, add an initial object to the cart array or add 1 to quantity of that item
        cart.forEach((cartItem) => {
            if (cartItem) {
                cartItem.quantity++;
            } else {
                const cartItem = {
                    id: cartItem.id,
                    quantity: 1,
                };
            }
            localStorage.add(JSON.stringify(cartItem));
        });
    });
    
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBook;