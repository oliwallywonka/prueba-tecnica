const express = require('express');
const movieController = require('../controllers/movie.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, movieController.addFavorite);


module.exports = router;
