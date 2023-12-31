const express = require('express')
const router = express.Router();

const testController = require('../controller/testController');

router.get('/test',testController.getAllTitle);
router.post('/test',testController.createTitle);

module.exports = router;