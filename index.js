const express = require('express');
const dbConnect = require('./config/dbConnect');
require('dotenv').config()
const usersRoutes = require('./routes/user')

const app = express();


// middleware
app.use(express.json())
app.use('/api', usersRoutes)


//routes
app.get('/', (req, res) => {
    res.send('Welcome my api rest')
});

const port = process.env.PORT || 3000;
dbConnect()

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})