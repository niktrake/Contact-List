const express=require('express');
const port=8000;
const path=require('path');

//using express as a function through app
const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',function(req,res){
    return res.render('home',{
        title:"My Contacts List"
    });
    
});




app.listen(port, function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }

    console.log("Express server is up and running on Port: ",port);
})