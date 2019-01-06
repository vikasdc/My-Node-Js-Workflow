const http = require('http')
const request = require('./routes')
const server = http.createServer((req,res)=>{
   request.requestHandler(req,res);
})

server.listen(3000);