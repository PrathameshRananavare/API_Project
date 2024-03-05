require('dotenv').config();

uri = "mongodb+srv://prathamesh:pratham%4001@cluster0.azwjuqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 


const mongoose = require("mongoose");


const connectDB = (uri) => {
    // console.log("connect db");
    return mongoose.connect(uri, {
       useNewUrlParser: true,
       useUnifiedTopology: true, 
    });
};

module.exports = connectDB;