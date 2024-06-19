const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + 'uploads'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalnamem, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024}
})

app.post('/uploaded', uploadDetail.single('thumbnail'), (req, res) => {
    res.send(req.file);
})

// app.get('/uploaded', function(req, res) {
//     res.render('uploaded', {title: '파일 업로드 완료'})
// })

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 실습!' });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  