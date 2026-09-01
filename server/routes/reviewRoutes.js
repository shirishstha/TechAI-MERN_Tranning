const express = require('express');
const { getAReviewWithId, createReview, getAllReviewsWithMovieId, updateReviewById, deleteReviewById } = require('../controller/reviewController');
const { authValidation } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/movie/:id', getAllReviewsWithMovieId);
router.get('/:id', getAReviewWithId);
router.post('/create', authValidation, createReview);
router.put('/update/:id', updateReviewById);
router.delete('/delete/:id', deleteReviewById);

module.exports = router;