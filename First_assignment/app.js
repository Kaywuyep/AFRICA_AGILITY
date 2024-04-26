const express = require("express")

const app = express()

const PORT = 3000

app.get('/kate', (req, res) => {
    // Simulate fetching user data for GET requests
    console.log('Say hi to Kate')
    res.send('Hello Kate, hope you are enjoying your backend SE classes')
})
app.post('/kate', (req, res) => {
    //create a new user resource
    const newUser = 'Kate';
    console.log('Creating new user:', newUser);
    res.send(`New user ${newUser} created successfully!`);
})
app.put('/kate', (req, res) => {
    //update all user resource
    const newUser = 'Kate';
    const newUpdate = 'Kate loves tech';
    console.log('Updating user quote:', newUpdate);
        
    // Assuming you're updating the user quote here
    res.send(`${newUser} profile updated successfully!`);
})
app.patch('/kate', (req, res) => {
    //update part of user resource
    const newUser = 'Kate';
    const newUpdateAbout = 'Kate is amazing';
    console.log('Updating user quote:', newUpdateAbout);
        
    // Assuming you're updating some parts of the user quote
    res.send(`${newUser} account updated successfully!`);
})
app.delete('/kate', (req, res) => {
    //delete all user resource
    const newUser = 'Kate';
    console.log('Deleting user:', newUser);

    res.send(`${newUser} profile deleted successfully!`);
})

app.listen(PORT, () => {
    console.log(`app server is running on http://localhost:${PORT}`)
})