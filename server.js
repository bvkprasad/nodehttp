const http = require("http");
const url = require('url');
const port = process.env.PORT || 80;
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{'content-type':'text/html'});
        var q = url.parse(req.url,true).query;
        var name = q.name;
        res.write("hello "+name);
        res.end();
    }
});

server.listen(port);