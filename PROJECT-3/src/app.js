const express  =  require("express");
const http = require("http");
const {connectDB} =require("./db/dbconnection");
const config = require("./config/config")
const app = express();

//databse connect
connectDB();

//simple server create
http.createServer(app).listen(config.port,()=>{
     console.log("Server SuccessFully Listing PORT Number in 3000 !...");
});