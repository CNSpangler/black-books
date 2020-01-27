import addProduct from './addProduct.js';

const submitButton = document.getElementById('submit-form');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    let formData = new FormData(document.getElementById('product-entry-form'));
    console.log(formData);
    
    formData.get('id');
    formData.get('title');
    formData.get('author');
    formData.get('type');
    formData.get('price');    
    
    let newItem = JSON.stringify(formData);
    console.log(newItem);
    addProduct(newItem);
});