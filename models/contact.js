 const mongoose = require('mongoose');

 const contactSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : true
        },
        company_name :{
            type: String,
            required : true
        },
        designation :{
            type : String,
            required : true
        }
 });
 const Contact  = mongoose.model('contact', contactSchema);
 module.exports = Contact;