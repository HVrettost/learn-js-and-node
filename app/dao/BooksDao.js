exports.getBooks = () => {
    return books;
}

exports.getBookById = (bookId) => {
    return filterBooksById(bookId);
}

function filterBooksById(bookId) {
    for (let counter = 0; counter < books.length; counter++) {
        if (books[counter].id == bookId) {
          return books[counter];
        }
    }
}

const books = [
    { id: 890, name: 'Lord of the Rings' },
    { id: 900, name: 'Silmarilion' }
];
