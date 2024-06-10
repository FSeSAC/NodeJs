const http = require('http');
http.createServer(function(req, res) {
    // send http
    // http  status 200은 정상적인 응답
    // Content-type: text/plain
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(`<h2> Hello Rain </h2>`)
}).listen(8080, ()=> {
    console.log('8000포트에서  서버 실행 중')
});