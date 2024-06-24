const express = require('express');
const router = express.Router();

// (임시) DB에서 가지고온 데이터
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'hroutery',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/comments', (req, res) => {
    res.render('comments', { comments }); // { comments: comments }
});

// 콜론(:): 요청의 주소에서 "변수"를 사용하는 방법
router.get('/comment/:id', (req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id) // '1'

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id; 
    console.log(comments[commentId - 1])

    if(!comments[commentId - 1]) return res.render('404');

    res.render('comment', { comment: comments[commentId - 1] });
})

router.get('/test/:id/:name', (req, res) => {
    res.send(req.params);
})

module.exports = router;