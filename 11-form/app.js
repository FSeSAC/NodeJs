const express = require('express'); // express 모듈 할당
const app = express();              // express 앱 객체 생성
const PORT = 8888;                  // 서버가 실행될 포트 번호

app.set('view engine', 'ejs')       // 뷰 엔진에  ejs를 할당
app.set('views', './views');        // 뷰 위치 폴더 할당

/** 미들웨어(Middleware) 연결
 *  - 요청/req과 응답/res의 중간에서 작업
 *  - express에서는 app.use()로  등록해야함
 *  */

// ex) body-parse 모듈
// urlencoded로 파싱된 body를 요청 -> post요청으로 들어온 모든 형식의 데이터를 파싱
app.use(express.urlencoded({extended: true}));
// 요청의 body 객체에 json 형태로 응답
app.use(express.json());


// localhost:PORT/ 경로 접속시, index.ejs 응답
app.get('/', (req, res) => {
    res.render('index', {title: '폼 실습하기'});
})

app.get('/getForm', (req, res) => {
    console.log(req.query);
    // res.send('get 요청 성공!')
    res.render('result', {title: 'GET 요청 결과', userInfo: req.query})
    // userInfo: req.query => { idG: 'aixion1506', pwG: '1234' }
})

app.post('/postForm', (req, res) => {
    console.log(req.body); // { idG: 'rani1506', pwG: '5678' }
    // res.send('post 요청 성공!')
    res.render('result', {title: 'POST 요청 결과', userInfo: req.body})
})

/**
 * res.send(): 문자열, JSON, 파일 등을 클라이언트에게 응답(JSON을 가장 많이 응답)
 *  - 서버가 데이터를 응답할 때 send() 사용
 * res.render(뷰, 데이터): 템플릿 엔진을 사용해 서브측에서 `동적으로 ` HTML을 생성하고 클라이언트에게 응답
 *  - 서버측에서 동적으로 페이지를 렌더링할 때 render() 사용
 * => 뷰: views/ 폴더의 ejs 파일 연결
 * => 데이터: 뷰에 넣어줄 정보
 */

// listen(포트번호, 서버 실행시 실행한 콜백함수) : 서버 시작 메서드
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})