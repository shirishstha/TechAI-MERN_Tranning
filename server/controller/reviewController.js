import Review from '../models/reviewModel.js'
import JWT from 'jsonwebtoken'

export const getAllReviewsWithMovieId = async (req, res) => {
    const mid = req.params.id;
    const reviews = await Review.find({
        movie: mid
    }).populate("user", "username");
    res.json({
        success: true,
        message: `Review fetched successfully`,
        data: reviews
    })
}

export const getAReviewWithId = async (req, res) => {
    const id = req.params;
    const review = await Review.findById(id);
    if (!review) {
        res.json({
            success: false,
            message: 'There is no such review with that id'
        })
    }

    res.json({
        success: true,
        message: 'Review fetched successfully',
        data: review
    })
}

export const createReview = async (req, res) => {
    const data = req.headers.authorization;
    const token = data.split(" ")[1];
    const userData = await JWT.decode(token, process.env.JWT_SECRETE);
    const user = userData.userId;
    const { comment, movie } = req.body;
    if (!comment || !user || !movie) {
        return res.send({
            success: false,
            message: 'All fields must be filled properly.'
        })
    }
    //code to send in database
    const review = await Review.create({
        comment,
        user,
        movie
    })

    res.json({
        success: true,
        message: 'Movie created Successfully',
        data: review
    })
}

export const updateReviewById = async (req, res) => {
    const id = req.params.id;
    const token = req.headers.authorization
    const resultToken = token.split(" ")[1];
    const decoded = JWT.decode(resultToken);

    //code to update movie
    const review = await Review.findById(id);
    if (!review) {
        return res.json({
            success: false,
            message: 'There is no such review with that id'
        })
    }

    console.log(review.user, decoded.userId);

    if (review.user.toString() !== decoded.userId.toString()) {
        return res.json({
            success: false,
            message: 'You can only edit your review'
        })
    }

    const { comment } = req.body;
    // data validation

    const result = await Review.findByIdAndUpdate(id, {
        comment,
    });

    res.json({
        success: true,
        message: `Review has been updated successfully.`
    })
}

export const deleteReviewById = async (req, res) => {
    const id = req.params.id;
    const token = req.headers.authorization
    const resultToken = token.split(" ")[1];
    const decoded = JWT.decode(resultToken);

    // code to delete movie 
    const review = await Review.findById(id);
    if (!review) {
        res.json({
            success: false,
            message: 'There is no such review with that id'
        })
    }

    if (review.user.toString() !== decoded.userId.toString()) {
        return res.json({
            success: false,
            message: 'You can only delete your review'
        })
    }

    const result = await Review.findByIdAndDelete(id);

    res.json({
        success: true,
        message: `Review has been deleted`
    })
}

