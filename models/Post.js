const mongoose = require('mongoose');
//Making a schema, how the post will look. Describing how the data will look

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema); // We made a model with a name and the schedma we made!