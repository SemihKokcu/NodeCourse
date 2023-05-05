const http = require('http');

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    const method = req.method;
    if (url==="/") {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter UserName</title></head>')
        res.write('<body><form method="POST" action="/create-user"> <input type="text" name="userName"/> <button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    
    if (url==="/create-user" && method==="POST") {
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk)
        });
        return req.on('end',(err)=>{
            const parsedBody = Buffer.concat(body).toString();
            const userName =parsedBody.split('=')[1];
            console.log("user name is : "+userName)
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end()
        })
    }
})

server.listen(3000)