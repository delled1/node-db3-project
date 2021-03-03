const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);


server.get("/", (req,res) => {
    res.send("<h1>Unit 4: Node DB3 Project")
})
module.exports = server;