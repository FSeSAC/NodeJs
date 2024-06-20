const express = require('express');
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', 
    express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/'); // 파일을 저장할 경로
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 업로드 크기 제한
})

app.post("/uploaded", uploadDetail.single('thumbnail'), (req, res) => {
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보

    // res.send('Success upload!');
    res.render('uploaded', {src: req.file.path,
        userInfo: {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name,
            age: req.body.age
        }
    });
});


app.post('/dynamicFile', uploadDetail.single('thumbnail'), (req, res) => {
    res.send(req.file);
})

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 배워보자!!!' });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  