const User = require('../model/User');


// 메인 페이지
exports.main = (req, res) => {
    res.render('index');
  };


// 회원가입 페이지
exports.signupPage = (req, res) => {
  res.render('signup');
}

// 회원 가입하기
exports.postUser = (req, res) => {
  console.log('req.body', req.body);
  User.postUser(req.body, (result) => {
    console.log('controller/postUser ->', result);
    res.send({ id: result });
  })
}


exports.signinPage = (req, res) => {
  res.render('signin');
}