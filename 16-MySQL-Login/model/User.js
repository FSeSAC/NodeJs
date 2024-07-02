const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'Login'
})

// 회원 가입
exports.postSignup = (data, callback) => {
    console.log(data);
    conn.query(`insert into user(userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}' )`, (err, rows) => {
        if (err) throw err;
        
        console.log('model/postUser ->', rows);
        callback(rows);
    } )
}



// 로그인 회원 조회
exports.postSignin = (data, callback) => {
    let query;
    if('password' in data) query = `select * from user where userid = '${data.userid}' and password = '${data.password}'`
    else query = `select * from user where userid='${data.userid}'`

    conn.query(`select * from user`, (err, rows) => {
        if (err) throw err;

        console.log('model/getUser ->', rows);
        callback(rows[0]);
    })
}

// 회원 정보 수정
exports.updateUser = (data, callback) => {
    const {id, name, password} = data; // id를 가져오는건 userid는 불변해야해서
    conn.query(`update user set name='${name}' ,password='${password}' where id = ${id}`, (err, rows) => {
        if (err) throw err;
        
        console.log('model/updateUser ->', rows);
        callback(true);
    })
}

// 회원 삭제
exports.deleteUser = (req, res) => {
    conn.query(`delete from user where id=${data.id}`, (err, rows) => {
        if (err) throw err;

        console.log('model/deleteUser ->', rows);
        callback(true);
    })
}