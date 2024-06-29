const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'Login'
})

// 회원 가입
exports.postUser = (data, callback) => {
    conn.query(`insert into user(userid, name, password) values('${data.userid}', '${data.name}', '${data.password} )`, (err, rows) => {
        if (err) throw err;
        
        console.log('model/postUser ->', rows);
        callback(rows);
    } )
}



// 로그인 회원 조회
exports.getUser = (data, callback) => {
    let query;
    if('password' in data) query = `select * from user where userid = '${data.userid}' and password = '${data.password}'`
    else query = `select * from user where userid='${data.userid}'`

    conn.query(`select * from user`, (err, rows) => {
        if (err) throw err;

        console.log('model/getUser ->', rows);
        callback(rows[0]);
    })
}
