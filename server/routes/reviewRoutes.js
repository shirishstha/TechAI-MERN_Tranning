const express = require('express');
const { getAReviewWithId } = require('../controller/reviewController');

const router = express.Router();

router.get('/:id',getAReviewWithId);
router.post('/create', );
router.put('/update/:id', );
router.delete('/delete/:id', );

module.exports = router;