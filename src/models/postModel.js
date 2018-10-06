let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    created_by: {type: Number, required: true},
    created_at: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model('Post',schema);