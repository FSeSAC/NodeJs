const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {title: '회원가입'});
})

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {
        title: 'GET 요청 결과',
        userInfo: req.query
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})