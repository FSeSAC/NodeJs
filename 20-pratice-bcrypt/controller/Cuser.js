const User = require('../models/User');

exports.main = (req, res) => {
    res.render('index');
  };

  // 회원가입 페이지
exports.signupPage = (req, res) => {
  res.render('signup');
}


// 회원가입 로직
exports.postSignup = (req, res) => {
  console.log('req.body', req.body);
  User.postSignup(req.body, (result) => {
    console.log('controller/postSignup ->', result);
    res.send({ id: result });
  })
}

// 로그인 페이지
exports.signinPage = (req, res) => {
  res.render('signin');
}

// 로그인 로직
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    res.send({ data: result})
  })
}