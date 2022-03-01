const express = require('express')
const booksService = require('./../service/BooksService')
const router = express.Router()

const getAllBooks = router.get('/books', (request, response, next) => {
    console.log('Trying to get books...');
    let books = booksService.getBooks();
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(books));
    next();
});

const getBookById = router.get('/books/:id', (request, response, next) => {
    console.log('Trying to get book by id ' + request.params.id + '...');
    let book = booksService.getBookById(request.params.id);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(book));
    next();
});

module.exports = router;
