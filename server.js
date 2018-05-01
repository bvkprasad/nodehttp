const http = require("http");
const port = process.env.PORT || 80;
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("hello world");
        res.end();
    }
});

server.listen(port);