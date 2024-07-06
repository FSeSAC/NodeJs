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
    if('pw' in data){
        query = `select * from user where userid = '${data.userid}' and pw = '${data.pw}'`
        console.log(data);
    } 
    else query = `select * from user where userid='${data.userid}'`

    conn.query(`select * from user`, (err, rows) => {
        if (err) throw err;

        console.log('model/getUser ->', rows);
        if (rows.length > 0) {
            callback(rows[0]);  // 로그인 성공 시 사용자 데이터 반환
        } else {
            callback(null);  // 로그인 실패 시 null 반환
        }
    })
}

// 회원 정보 수정
exports.patchProfile = (data, callback) => {
    const {id, name, pw} = data; // id를 가져오는건 userid는 불변해야해서
    conn.query(`update user set name='${name}' ,pw='${pw}' where id = ${id}`, (err, rows) => {
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