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
    img.src = books.image;
    img.alt = books.title;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = books.price;

    const button = document.createElement('button');
    button.value = books.id;
    button.textContent = 'Add';
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBook;