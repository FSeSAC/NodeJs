const express = require('express');
const app = express();
const PORT = 8800;

app.set('view engine', 'ejs') ;
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('서버가 8800포트에서 실행중')
})