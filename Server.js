const express = require('express')
const app = express()



require("dotenv").config({path: "./config/.env"})
const mongoose = require ("mongoose")

//connect 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));  



app.listen(4000, (err)=>{
    err 
       ? console.log(err)
       :console.log('the server is running on port : '+ 4000)
})