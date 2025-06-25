const newRouter = require('./news'); //         .news = ./news.js
const siteRouter = require('./site');
const introduceRouter = require('./introduce');
const meRouter = require('./me');

const express = require('express');

function route(app){

    // app.use('/news', newRouter); // sử dụng router/new.js , đây là đường dẫn con

    // app.use('/login', siteRouter); 

    app.use('/', siteRouter);
    app.use('/introduce', introduceRouter); 
    app.use('/me', meRouter); 
   
}

module.exports = route;