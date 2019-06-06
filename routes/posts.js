const express = require('express');
const router = express.Router();
// We can use the router instead of the app to make requests
const Post = require('../models/Post');

//MAKING ROUTES WITH EXPRESS
//Get shoots us back a pessage, post gives a message,
// delete removes a post, patch updates a post
router.get('/', (req, res) => {
    res.send("Welcome to home!");
});

router.get('/demo', (req, res) => {
    res.send("Welcome to the demo!");
});
router.get('/posts', (req, res) => {
    res.send("Welcome to the posts!");
});

// We need to access the  body to post
router.post('/', (req, res) => {
    console.log(req.body);
})


module.exports = router;