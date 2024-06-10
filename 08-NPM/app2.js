// const http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end(`<h2>Hello Rani</h2>`)
// }).listen(3000, () => {
//     console.log('3000포트에서 서버 실행중')
// });

const http = require('http');
http.createServer(function(req, res) {
    let _url = req.url;
    res.writeHead(200);
    res.write("<h2>Hello Rani</h2>");
    res.end(`<p> ${_url} </p>`)
}).listen(8000, () => {
    console.log('8000포트에서 서버 실행중')
});
