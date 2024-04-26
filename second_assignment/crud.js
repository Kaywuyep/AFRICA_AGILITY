const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000

// In-memory array to store book data
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
  ];

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/books', (req, res) => {
    res.json({ message: "Get all books in store data", books: books })
});

app.get('/api/books/:id', (req, res) => {
    // find books by the id
    const id = req.params.id
    const book = books.find(book => book.id === id)
    if (book) {
        res.json({ message : "Get all books with id", book })
        //res.json(book)
    } else {
        res.status(404)
        res.json({ message: 'Book not found' });
    }
})

// Create a new book
app.post('/api/books', (req, res) => {
    const newBook = req.body
    books.push(newBook)
    //res.status(200)
    res.json(newBook)
});

// Update a book
app.put('/api/books/:id', (req, res) => {
    const id = req.params.id
    const updatedBook = req.body
    const index = books.findIndex(book => book.id === id)
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook }
        res.json(books[index])
    } else {
        res.status(404)
        res.json({ message: 'Book not found' })
    }
})

// Delete a book
app.delete('/api/books/:id', (req, res) => {
    const id = req.params.id
    const index = books.findIndex(book => book.id === id)
    if (index !== -1) {
        const deletedBook = books.splice(index, 1)
        res.json(deletedBook[0])
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})

app.listen(PORT, () => {
    console.log(`app server is running on http://127.0.0.1:${PORT}`)
} )