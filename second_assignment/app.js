const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/user/', (req, res) => {
    const body = req.body
    //res.json({message: 'user info retrieved successfully'  body: body})
    res.json({ message: "User info retrieved successfully", body: body })
})
app.get('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ message : "Get all users with id" + id })
})

app.listen(PORT, () => {
    console.log(`app server is running on http://127.0.0.1:${PORT}`)
} )