const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();


console.log('--- routes/index.js ---') 
console.log(controller);

router.get('/', controller.getMain);

router.get('/comments', controller.getComments);

// 콜론(:): 요청의 주소에서 "변수"를 사용하는 방법
router.get('/comment/:id',controller.getComment);


module.exports = router;