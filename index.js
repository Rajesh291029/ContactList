const express = require('express');
  const app   = express()
   const path = require('path');
   const port = 8000;
const url = require('url');
const db= require('./config/mongoose');

const Contact= require('./models/contact')

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use(express.static('Assets'));

var contactlist =[
    { name:"vash",
      phone: 9311869393
    },
    {   name: "Neena",
        phone: 9250925025
    }
]

app.get('/', function(req, res){
    Contact.find({}, function( err, contacts){
        if(err){
            console.log( " Error in fetching data");
            return;
        }
        return res.render('home', { 
            title :"My Contacts",
            contact_List : contacts
   });
    // return res.render('home', { 
    //     title :"My Contacts",
    //     contact_List : contactlist
});
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title :"EJS Practice",
    });
});

app.post('/create-contact', function(req,  res){
    // contactlist.push({
    //     name : req.body.name,
    //     phone : req.body.phone,
    // });
     console.log(res.body);
     Contact.create({
        name : req.body.name,
        phone :req.body.phone,
        company_name : req.body.company_name,
        designation : req.body.designation
     }, function(err, newContact){
        if(err){
            console.log("error in creating a contact");
            return;
        }
        console.log("******", newContact);
   
     });
     return res.redirect('back');

});


app.get('/delete-contact/', function(req, res){
    console.log(req.query.phone);
    let Id= req.query.Id;
    Contact.findByIdAndDelete(Id, function (err){
       if(err){
        console.log("Error In Deleting");
        return;
       }

      return res.redirect('back');


    });

});


app.listen(port, function(err){
    if(err){
        console.log("error in server");
    }

    console.log("server is up and running on port", port)
})

