const fs = require("fs")

const requestHandler = (req,res)=>{
    res.setHeader('Content-Type','text/html')
if(req.url ==='/'){
    res.write('<form action="/method" method="POST"><input type="text" name="text"></input><input type="text" name="email"></input><button type="submit">Submit</button> </form>')
return res.end()
}
if(req.url === '/method' && req.method === 'POST'){
const body = []
debugger;
req.on('data',(chunk)=>{
    body.push(chunk);
})
return req.on('end',()=>{
    const parsedBody = Buffer.concat(body).toString();
    var message = parsedBody.split('=')[1];
    console.log(message)
    fs.writeFile('message.txt',message, (err)=>{
        res.statusCode = 302;
    res.setHeader('Location','/') 
    return res.end()
    })
    
}) 
}
res.write("<h1>hello world</h1>")
}

module.exports = {
    requestHandler
};