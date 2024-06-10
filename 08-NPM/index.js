const http = require('http');
const server =  http.createServer();

server.listen(8000,function() {
    console.log('8000포트에서  서버 실행 중')
})