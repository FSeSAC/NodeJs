const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router);


sequelize
    // force: true => 서버 실행마다 테이블 재 생성
    // force: false => 서버 실행시 테이블 없으면 생성
    .sync({ force:true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!');
            console.log(`Sever is running! localhost:${PORT}`);
        });   
    })
    .catch((err) => {
        console.error(err);
    })
