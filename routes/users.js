const express = require('express')
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/users_controller')
//use checkAuthentication midleware that we created to take the user to the profile page only if he is logged in 
router.get('/profile', passport.checkAuthentication, userController.profile);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/create', userController.create);
router.get('/logout', userController.destroySession);
router.get('/homepage', userController.homepage);
router.get('/mycomp', passport.checkAuthentication, userController.myComp);
router.get('/form',  userController.form);
router.get('/contacts', userController.contact);
router.get('/booking',  userController.booking);
router.get('/map',  userController.map);
router.get('/about',  userController.about);
router.get('/notice',  userController.notice);
router.get('/abcdef',  userController.abcdef);
router.get('/uvwxyz',  userController.uvwxyz);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'user',
    { failureRedirect: '/users/register' },
), userController.createSession);


module.exports = router;