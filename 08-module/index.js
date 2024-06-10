


// console.log(__dirname);
// console.log(__filename);
// const add = require('./add') 
// console.log(add(1,2))
// console.log('From index.js')


// scope(범위) 모듈은 각각의 범위를 갖고 있다
// require('./batman');
// require('./superman');

// 모듈의 기초형태

// ()() 함수의 자동실행
(function() {
    const superHero = "Superman";
    console.log(superHero)
})()

// 모듈의 형태
(function(exports, require, module, __filename, __dirname) {
    
})