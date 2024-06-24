const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 

const idxRouter = require('./routes/index');
app.use('/', idxRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);
// 기본 요청 주소 : 'localhost:PORT/user'


// 404
// 맨 마지막에 라우트/주소로 선언: 맨 마지막이 아니면 404이후의 다른 라우팅들이 무시
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});