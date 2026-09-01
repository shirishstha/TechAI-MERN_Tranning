const express = require('express');
const { getAMovieWithId, createMovie, updateMovieById, deleteMovieById, getAllReviewsWithMovieId, getAllMovies } = require('../controller/movieController');
const { authValidation } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/getAll',getAllMovies);
router.get('/:id',getAMovieWithId);
router.post('/create', authValidation,createMovie);
router.put('/update/:id', updateMovieById);
router.delete('/delete/:id', deleteMovieById);

module.exports = router;