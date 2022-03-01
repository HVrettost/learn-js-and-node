const booksDao = require('./../dao/BooksDao')

exports.getBooks = () => {
  return booksDao.getBooks();
}

exports.getBookById = (bookId) => {
  return booksDao.getBookById(bookId);
}
