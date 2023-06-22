const { Router } = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout',auth, authController.logout);
router.get('/updateBalance',auth,userController.updateBalance);
router.get('/updateSavingsGoal',auth,userController.updateSavingsGoal);
router.post('/addTransaction',auth,userController.addTransaction);
router.post('/addCategory',auth,userController.addCategory);

// router.get('/protected', auth, authController.protected);

module.exports = router;


