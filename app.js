const http = require('http');
const express = require('express');
const app =  express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);