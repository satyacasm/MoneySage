const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout',auth, authController.logout);
// router.get('/protected', auth, authController.protected);

module.exports = router;


