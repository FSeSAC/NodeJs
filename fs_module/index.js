const fs = require('fs');
const path  = require('path');

fs.mkdir(path.join(__dirname,'demo'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('demo 생성 완료')
})

// fs.rmdir(path.join(__dirname,'demo'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('demo 삭제 완료')
// })