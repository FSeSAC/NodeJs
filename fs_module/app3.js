// 파일 생성
const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8')
console.log(data)

// fs.readFile('./input.txt', 'utf-8', function(err, data) {
//     console.log(data)
// })

// fs.readFile('./input.txt', function(err, data) {
//     console.log(data)
// })

console.log('파일 읽기 완료')