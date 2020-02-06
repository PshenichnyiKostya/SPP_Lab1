var express = require('express');
var router = express.Router();
let tasks = require('../controllers/tasks');

router.get('/', tasks.getTasks);
router.post('/', tasks.uploadTask);

module.exports = router;