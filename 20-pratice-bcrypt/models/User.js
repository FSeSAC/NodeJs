const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'bcrypt'
  }); // database 연결 객체

// 회원 가입
exports.postSignup = (data, callback) => {
    console.log(data);
    conn.query(`insert into member(userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}' )`, (err, rows) => {
        if (err) throw err;
        
        console.log('model/postSignup ->', rows);
        callback(rows);
    } )
}


// 로그인 회원 조회
exports.postSignin = (data, callback) => {
    let query;
    if('password' in data) query = `select * from member where userid = '${data.userid}' and password = '${data.password}'`
    else query = `select * from member where userid='${data.userid}'`

    conn.query(`select * from member`, (err, rows) => {
        if (err) throw err;

        console.log('model/getUser ->', rows);
        callback(rows[0]);
    })
}