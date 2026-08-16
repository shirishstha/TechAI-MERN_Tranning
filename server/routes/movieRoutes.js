const express = require('express');
const { getAMovieWithId, createMovie, updateMovieById, deleteMovieById } = require('../controller/movieController');
const router = express.Router();

router.get('/:id',getAMovieWithId);
router.post('/create', createMovie);
router.put('/update/:id', updateMovieById);
router.delete('/delete/:id', deleteMovieById);

module.exports = router;