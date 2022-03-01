const booksDao = require('./../dao/BooksDao')

function getBooks() {
  return booksDao.getBooks();
}

function getBookById(bookId) {
  return booksDao.getBookById(bookId);
}

module.exports = { getBooks };
module.exports = { getBookById };
