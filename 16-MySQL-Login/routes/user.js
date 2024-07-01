const express = require('express');
const controller = require('../controller/CUser');
const router = express.Router();


router.get('/', controller.main);

router.get('/signup', controller.signupPage)

router.post('/signup', controller.postUser);

router.get('/signin', controller.signinPage);

module.exports = router;