const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// express-session 미들웨어
app.use(session({
    // 필수 옵션, 세션 암호화 키
    secret: process.env.COOKIE_SECRET,
    // 세션이 변경되지 않아도 매번 덮어쓰기 저장 유무
    resave: false,
    // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지
    saveUninitialized: false,

    cookie: {
        httpOnly: true, // 클라이언트에서 쿠키 확인 x
        secure: false,  // HTTP에서 사용가능하도록(true라면 https에서만 가능)
        maxAge: 10 * 1000,
        // expires: // 만료기간 설정
    }
}))
// 인자로 세션에 대할 설정 객체를 할당

app.get('/', (req, res) => {
    res.render('session');
})

app.get('/set', (req, res) => {
    // 세션 사용
    // req.session.키 = 값;
    
    if (req.query) {
        req.session.name = req.query.name;
        req.session.age = req.query.age;
    } else {
        req.session.name = '라니안';
        req.session.age = 13;

    }
    res.send('세션 설정 완료!');
})

app.get('/name', (req, res) => {
    console.log('req.session ->', req.session);
    res.send({id: req.sessionID, name: req.session.name, age:req.session.age});
})

app.get('/destroy', (req, res) => {
    // 세션 삭제
    // req.session.destroy(세션 삭제시 호출할 콜백함수)

    req.session.destroy((err) => {
        if (err) throw err;

        // res.send('세션 삭제 완료');
        res.redirect('/name');
    })
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
});

// express-sesion 모듈
// : 세션관리
// ex) 로그인 등 세션을 구현하거나 특정 클라이언트에 대한 데이터를 저장할 때 사용
//  -> 사용자 별로 req.session 객체 유지

// 세션!
// 1. 세션 사용: req.session.키
// 2. 세션 설정: req.session.키 = 값
// 3. 세션 삭제: req.destroy(콜백)