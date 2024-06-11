const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors())

// Create the http sever using express
const server = http.createServer(app)

const io = new Server(server, {
    //infomation :
    cors:{
        // the origin of your frontend
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

server.listen(3001, ()=> {
    console.log("Server is running");
})