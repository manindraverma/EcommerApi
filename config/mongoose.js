const mongoose=require('mongoose');

//connecting to mongoose server and opening the database
mongoose.connect('mongodb+srv://Manindra301998:manindra%40304@cluster0.aipinku.mongodb.net/?retryWrites=true&w=majority')

// mongoose.connect('mongodb://localhost/ecommerce_api');


//below 3 lines are to make sure connection was established successfully or not
const db=mongoose.connection;
//if there is error in connecting to db
db.on('error',console.error.bind(console,"error connecting to MongoDB"));
//when we get connected to databse and connection is open
db.once('open',function(){
    console.log('connected to database successfully: mongoDb')
})

//to make this module usable we need to export it
module.exports=db;

