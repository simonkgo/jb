const express = require('express');

const app = express();

app.get('/api/v1/product',(req,res,next) => {
    const myEror = new Error('My Eror Is Amezing');
    next(myEror);
})

app.use((err,req,res,next) => {
    const {name,message} = err;
  res.status(400).json({name,message});
})

app.listen(3000,() => console.log('Server Is Runing In Port 3000'));0