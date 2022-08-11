const express=require('express');
const { startSession } = require('mongoose');
const app=express();
require('dotenv').config();
const port=process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('./public'));

const start= async ()=>{
    app.listen(port,()=>console.log(`Server is Listening on port ${port}`))
}


start();