const express = require('express');
const { getAMovieWithId, createMovie, updateMovieById, deleteMovieById } = require('../controller/movieController');
const { authValidation } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:id',authValidation,getAMovieWithId);
router.post('/create', createMovie);
router.put('/update/:id', updateMovieById);
router.delete('/delete/:id', deleteMovieById);

module.exports = router;