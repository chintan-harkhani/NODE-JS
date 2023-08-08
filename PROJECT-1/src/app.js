// let http = require("http");//require to http
// let fs = require("fs");//require to fs;
// let port = 6000;//dicler the port
// http.createServer((req,res)=>{//simple sever create
//       fs.readFile("src/index.html",(err,data)=>{ //read a file in html code
//         res.writeHead(200,{"contant-type":"text/html"})// file in type in html tobtext
//         res.write(data); //that is a send a data in localhost
//         res.end();//thsi is server is end
//       })
// }).listen(port,()=>{//  start the server 
//   console.log("Server is Successfully Running, and App is listening on port "+port)
// })
// // simple in html in code 
// let data = ` <body style="background-color: bisque;">
// <h1 style="text-align: center;"> HISTORY OF NODE JS</h1>
// <h2>Node.js is an open source server environment</h2>
// <h2>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</h2>
// <h2>Node.js uses JavaScript on the server</h2>
// <h2>Node.js uses asynchronous programming!</h2>
// <body>`
let express = require("express");// express required
let app = express();
let port = 4000;
// define a basic a data fil
app.get("/",(req,res)=>{
    res.send(data);  //that is a send a data in localhost
    res.end(); //thsi is server is end
}).listen(port, ()=>{//  start the server 
        console.log("Server is Successfully Running, and App is listening on port "+port)
});
