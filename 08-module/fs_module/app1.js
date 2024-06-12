// 디렉토리 읽기
const fs = require('fs');

// fs.readdir('./', function(err, files) {
//     if (err) console.log('에러', err)
//     else console.log('결과는', files)
// })

// 파일 생성
// fs.writeFile('mynewfile1.txt', 'Hello Rani', function(err) {
//     if (err) throw err;
//     console.log('파일 생성됨')
// })

// open(), w를 이용해 파일 생성, 내용x
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err)  throw err;
//     console.log('파일 생성됨')
// })

// 파일 생성 appendFile() 추가, 기존 파일을 전제
fs.appendFile('mynewfile1.txt', "kim", function(err) {
    if (err)  throw err;
    console.log('파일 생성됨')
})