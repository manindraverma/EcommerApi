const express=require('express');
const bodyParser=require('body-parser');
const db =require('./config/mongoose');

const port=8000;

//initialize the express app
const app=express();

//using body parser to parse over the body
app.use(bodyParser.urlencoded({extended:true}));

//routing path
app.use('/',require('./routers'));



//starting the server
app.listen(port,(err)=>{
    if(err){
        console.log('errro is '+err)
    }
    console.log(`app is live on -- ${port}`)
})