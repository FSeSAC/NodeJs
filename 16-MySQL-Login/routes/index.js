const express = require('express');
const controller = require('../controller/CVisitor');
const router = express.Router();


router.get('/', controller.main);