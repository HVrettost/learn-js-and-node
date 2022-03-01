const express = require('express');
const booksController = require('./controller/BooksController');

const port = 9000

const app = express();

app.use(express.json());
app.use('/', booksController);

const listener = app.listen(port, () => {
    console.log('App is listening on port: ' + port);
});
