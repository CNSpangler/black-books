import books from '../data/books.js';
import renderBook from './render-book.js';

for (let i = 0; i < books.length; i++) {
    const bookList = document.getElementById('book-list');
    const book = renderBook(books[i]);
    bookList.appendChild(book);
}