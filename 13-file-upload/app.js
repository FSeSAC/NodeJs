const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
const upload = multer({
    dest: 'uploads/',
});


const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');     // 파일을 저장할 경로
        },
    filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
    }
    }),
    limits: {fileSize: 5 * 1024 * 1024} // 업로드 크기 제한
})




// multer객체.single(): 하나의 파일을 업로드
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, ?? 객체 생성
app.post("/upload", uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    // {
    //     fieldname: 'userfile',
    //     originalname: 'á\x84\x87á\x85¡á\x84\x87á\x85®á\x84\x82á\x85£á\x86¼á\x84\x8Bá\x85µ.jpeg',
    //     encoding: '7bit',
    //     mimetype: 'image/jpeg',
    //     destination: 'uploads/',
    //     filename: '48b4863620c106d1ba64caea81765734',
    //     path: 'uploads/48b4863620c106d1ba64caea81765734',
    //     size: 117682
    // }

    res.send('Success upload!');

    // 파일 탐색기 -> uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동 저장 (multer객체를 생성 시, dest 옵션 외에 설정 안해서)
    // 
});


app.post('/upload/array', uploadDetail.array('banana'), (req, res) => {
    console.log(req.body);  // {title: '파일 2개 업로드중!'}
    console.log(req.files); // [{}, {}, ....] 배열 형태로 각 파일 정보 저장

    res.send('Success Upload! multi!');
})

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
app.post("/upload/fields", uploadDetail.fields([{name:'kiwi'}, {name:'orange'}]), (req, res) => {
    console.log(req.body); // { title1: '', title2: '' }
    console.log(req.files); // {kiwi: [{}, ...], orange: [{ }, ...]}

    res.send('Success Upload! multi!2');
});

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 배워보자!!!' });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  