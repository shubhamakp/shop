const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method  = req.method;
    if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Mypage</title></html>');
    res.write('<body><form action ="/message" method = "POST"><input type = "text" name ="message"> <button type = "submit" >send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if(method==='POST'&&url === '/message')
    {
        const body =[];
        req.on('data',(chunk) => {
            body.push(chunk);
        });
        
       return req.on('end',() =>{
            const parsedmsg = Buffer.concat(body).toString();
            const parsedbody = parsedmsg.split('=')[1];
            console.log(parsedmsg);
            fs.writeFileSync('message.txt',parsedbody);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })
    }
    res.write('<html>');
    res.write('<head><title>Mypage</title></html>');
    res.write('<body><h1>Hello dares </h1></body>');
    res.write('</html>');
};
module.exports = requestHandler;