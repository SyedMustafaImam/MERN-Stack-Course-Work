var express = require('express');
var router = express.Router();
var user_controller=require('../controllers/user.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',user_controller.fetchloginform);
router.post('/login',user_controller.loginchk); //when user name is password is subbmitted for auth
router.get('/logout'); //this route will distroy all sessions
router.get('/home', user_controller.redirectLogin );
router.get('/:username/dashboard', user_controller.dashboard);

router.get('/logout', user_controller.logout);
module.exports = router;
