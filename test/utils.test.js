import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import books from '../data/books.js';
import cart from '../data/cart.js';

const test = QUnit.test;

// findById tests
test('should use id to find a book title', function(assert) {
    const id = 'flying';
    const expected = cart[0];
    const result = findById(cart, id);
    assert.equal(result, expected);
});

test('should return null if id not found', assert => {
    const id = 'not found';
    const expected = null;
    const result = findById(cart, id);
    assert.equal(result, expected);
});

// calcLineItem test
test ('should return result of item quantity * item price', function(assert) {
    const quantity = 2;
    const price = 4.95;
    const expected = 9.90;
    const result = calcLineItem(quantity, price);
    assert.equal(result, expected);
});

//calcOrderTotal test
test('should return orderTotal that sums results of all lineTotal values', function(assert) {
    const expected = 43.70;
    console.log(expected);
    const result = calcOrderTotal(cart, books);
    console.log(result);
    assert.equal(result, expected);
});