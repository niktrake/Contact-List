const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

//what we want our collection to be called in the database

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;