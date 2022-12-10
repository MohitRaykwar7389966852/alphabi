const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')
const {createUser,loginUser,viewGiph} = require('../controller/userController');

//customer
router.post('/createUser',createUser)
router.post('/loginUser',loginUser)
router.get('/getGiph',auth,viewGiph)


module.exports = router;