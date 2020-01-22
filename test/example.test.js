import renderBook from '../products/render-book.js';

const test = QUnit.test;

const longWay = {
    id: 'longWay',
    title: 'The Long Way to a Small, Angry Planet',
    author: 'Becky Chambers',
    image: '../assets/longWay.jpg',
    type: 'paperback',
    price: 7.95
};

const longWayLi = renderBook(longWay);
const result = longWayLi.outerHTML;

console.log(result);

test('should convert object to html li output', function(assert) {
    const expected = '<li id="longWay" class="paperback" title="The Long Way to a Small, Angry Planet"><h3>The Long Way to a Small, Angry Planet</h3><h5>by Becky Chambers</h5><img src="../assets/longWay.jpg" alt="The Long Way to a Small, Angry Planet"><p class="7.95"><button value="longWay">Add</button></p></li>';

    assert.equal(expected, result);
});
