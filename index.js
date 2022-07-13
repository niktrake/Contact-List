const express=require('express');
const port=8000;
const path=require('path');


const db = require('./config/mongoose');
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
    return res.render('home',{
        title:"My Contacts List",
        contact_list: contactList
    });
    
});

app.post('/create-contact',function(req,res){
    contactList.push(req.body);
    return res.redirect('back');
})


//for deleting a contact
app.get('/delete-contact',function(req,res){
    
    let phone=req.query.phone;

    let contactIndex=contactList.findIndex(contact => contact.phone == phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');

});


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }

    console.log("Express server is up and running on Port: ",port);
})