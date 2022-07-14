const express=require('express');
const path=require('path');
const port=8000;


const db = require('./config/mongoose');
const Contact = require('./models/contact');

//using express as a function through app
const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


//middleware 1
// app.use(function(req,res,next){
//     console.log("Middleware 1 called");
//     next();

// });

// app.use(function(req,res,next){
//     console.log("Middleware 2 called");
//     next();
// })






var contactList = [
    {
        name:"Nikhil",
        phone:"111111111"
    },
    {
        name:"Buffalo",
        phone:"9729771150"
    }
]





app.get('/',function(req,res){

    Contact.find({}, function(err,contacts){
        if(err){
            console.log("Error in fetching the contacts",err);
            return;
        }
        return res.render('home',{
            title:"My Contacts List",
            contact_list: contacts
        });

    });


    
    
});

app.post('/create-contact',function(req,res){
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    },function(err, newContact){
        if(err){
            console.log("Error in creating a contact",err);
            return;
        }
        console.log('*********', newContact);
        return res.redirect('back');
    })
    
})


//for deleting a contact
app.get('/delete-contact',function(req,res){
    
    //getting id from the url
    let id=req.query.id;

    //find the contact in the databse and delete it
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting the contact");
            return;
        }

        return res.redirect('back');

    });
    

});


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }

    console.log("Express server is up and running on Port: ",port);
})