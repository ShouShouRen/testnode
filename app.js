// let a =1;
// let b =2;
// console.log(a+b);

// setInterval(function(){
//     console.log("hello");
// })

// const http = require("http");
// http.createServer(function (request, response) {
//     console.log(request.url)
//     console.log('接收到網頁請球');
//     response.writeHead(200, {"Content-Type":"text/plain"});
//     response.write("hello world" + request.url);
//     response.end();
// }).listen(3000);
// console.log("Server已開啟port: 3000.");

var http = require("http");

http.createServer(function (request, response) {
    console.log(request.url);
    if(request.url == '/'){
        console.log("接收到網頁請求");
        response.writeHead(200,{"Content-Type":"text/HTML"});
        response.write("<h1>index</h1>");
        response.end();
    }else if(request.url == '/search'){
        console.log("接收到網頁請求");
        response.writeHead(200,{"Content-Type":"text/HTML"});
        response.write("<h1>search</h1>");
        response.end();
    }else{
        response.writeHead(200,{"Content-Type":"text/HTML"});
        response.write("404");
        response.end();
    }
}).listen(process.env.PORT || 3000);
console.log("Server已開啟port: 3000.");







