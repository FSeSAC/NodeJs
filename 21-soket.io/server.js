const express = require('express');
const http = require('http');
// node.js 기본 내장 모듈인 'http' 불러오기.
// 'http' 모듈은 HTTP 서버와 클라이언트 기능을 제공.

const socketIO = require('socket.io');
// 'socket.io' 모듈 불러오기.
// WebSocket 기반, 실시간 양방향 데이터 전송 지원 라이브러리.

const app = express();
const server = http.createServer(app);
// Express 애플리케이션 기반으로 HTTP 서버 생성.

const io = socketIO(server)
// HTTP 서버 'server'를 'socket.io'에 바인딩하여 WebSocket 기능을 추가한 서버를 생성.
// 이러면 클라이언트-서버 간에 실시간 양방향 통신을 할 수 있음.

const PORT = 8080;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('client');
})

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이언트가 접속 했을 때 발생
    console.log('서버 연결 완료 :: ', socket.id);
    // socket.id : 소켓 고유 아이디 (브라우저 탭 단위)
    // (참고) 소켓 연결 완료.

    // [실습 1]
    socket.on('hello', (data) => {
        console.log(data);
        console.log(`${data.who} : ${data.msg}`);
        socket.emit('hellokr', {who: 'hello', msg: '안녕!!!'})
    })

    socket.on('study', (data) => {
        console.log(data);
        console.log(`${data.who} : ${data.msg}`);
        socket.emit('studykr', {who: 'study', msg: '공부해라!!!' })
    })


    socket.on('bye', (data) => {
        console.log(data);
        console.log(`${data.who} : ${data.msg}`);
        socket.emit('byekr', {who: 'bye', msg: '잘가라!!!' })
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})