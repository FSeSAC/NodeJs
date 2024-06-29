const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'Login'
})

// 회원 가입
exports.postUser = (data, callback) => {
    conn.query(`insert into user(userid, name, pw) values('${data.userid}', '${data.name}', '${data.password} )`, (err, rows) => {
        if (err) throw err;
        
        console.log('Model/postUser ->', rows);
        callback(rows);
    } )
}
