// /**
//  * url 모듈은 웹주소를 읽어옴
//  * 읽어온 내용을 구문분석하여
//  * 주소의 각 부분으로 나누고 객체로 변환
//  */

// // var addr = 'http://localhost:8000/example.htm?year=2024&month=feb';
// var addr = 'http://localhost:8000/demo.htm?id=2024&pw=feb';

// // 로그인 id=000 pw=000
// var q =  url.parse(addr, true)
// console.log(q)
// console.log(q.pathname);        // 경로와 파일이름 /example.htm
// console.log(q.search);          // ?year=2024&month=feb

// console.log('----------')
// var qdata = q.query;
// console.log(qdata);             // { year: '2024', month: 'feb' }
// console.log(qdata.month);       // 기존 쿼리에서 month에 해당하는것만 출력 feb

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    })

}).listen(8000, () => {
    console.log('8000 서버 실행 중')
})