const express = require('express');
const app = express();
const PORT = 5549;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

app.get('*', (req, res) => {
    res.render('404');
  });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`);
  });
  
  