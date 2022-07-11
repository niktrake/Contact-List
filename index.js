const express=require('express');
const port=8000;
const path=require('path');

//using express as a function through app
const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



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
    return res.render('practice');
})


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }

    console.log("Express server is up and running on Port: ",port);
})