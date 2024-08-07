const express = require('express');
const controller = require('../controller/CUser');
const router = express.Router();


router.get('/', controller.main);

router.get('/signup', controller.signupPage);

router.post('/signup', controller.postSignup);

router.get('/signin', controller.signinPage);

router.post('/signin', controller.postSignin);

router.patch('/profile/edit', controller.patchProfile);

router.delete('/profile/delete', controller.deleteUser);

module.exports = router;