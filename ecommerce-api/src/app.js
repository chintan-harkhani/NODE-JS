const express  =  require("express");
const http = require("http");
const bodyparser = require("body-parser")
const {connectDB} =require("./db/dbconnection");
const config = require("./config/config");
const routes = require("./routes/V1");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyparser.json());


app.use("/V1",routes);

app.use((req, res, next) => {
     next(new Error("Route not found!"));
   });

   //databse connect
connectDB();
// simple server create
http.createServer(app).listen(config.port,() =>{
     console.log("Server SuccessFully Listing PORT Number in 3000 !...")
});