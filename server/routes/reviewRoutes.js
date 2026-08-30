const express = require('express');
const { getAReviewWithId, createReview } = require('../controller/reviewController');

const router = express.Router();

router.get('/:id',getAReviewWithId);
router.post('/create',createReview);
// router.put('/update/:id', );
// router.delete('/delete/:id', );

module.exports = router;