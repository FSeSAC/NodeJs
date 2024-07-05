const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app);  // http 서버
const io = socketIO(server);    // socket 서버

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})