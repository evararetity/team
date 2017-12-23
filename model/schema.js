let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    docID : Number,
    emails : []
});

exports.User = mongoose.model("User", userSchema);