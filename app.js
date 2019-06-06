require('dotenv').config();
const express = require('express'); // This gets us the package into the filec
const app = express();
const mongoose = require('mongoose');
//MIDDLEWARES: A function that executes when a spacific route is hit
// Follows 
/*app.use('/posts', () => {
    console.log("this is a middleware running!");
})
*/

//Import routes using middleware 
const postRoute = require('./routes/posts');
// Everytime you use posts, use postRoute!
app.use('/posts', postRoute);
app.use('/demo', postRoute);

//We can also use the direct req
app.get('/', (req, res) => {
    res.send("welcome home!");
})

//CONNECT To Mongo
mongoose.
connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
    console.log('connected to DB!');
});


//Start listening to the server
app.listen(3000);