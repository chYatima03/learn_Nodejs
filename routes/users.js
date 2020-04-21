var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


/* GET users listing. */
router.get('/',  userController.login);

/* GET users listing. */
router.get('/login', userController.index);

module.exports = router;
