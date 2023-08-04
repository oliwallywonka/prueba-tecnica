const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

router
    .post('/', authController.authUser)
    .get('/:userId', auth, authController.getUser);

module.exports = router;

