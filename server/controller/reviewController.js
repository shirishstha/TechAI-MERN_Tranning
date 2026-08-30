import Review from '../models/reviewModel.js'

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
    const { comment,rating, user, movie} = req.body;
    if(!comment|| !rating || !user || !movie){
        return res.send({
            success:false,
            message:'All fields must be filled properly.'
        })
    }
    //code to send in database
   const review = await Review.create({
    comment,
    rating,
    user,
    movie
   })

    res.json({
        success: true,
        message: 'Movie created Successfully',
        data:review
    })
}

export const updateReviewById = async (req, res) => {
    const id = req.params.id;
    //code to update movie
    const review = await Review.findById(id);
    if (!review) {
        res.json({
            success: false,
            message: 'There is no such review with that id'
        })
    }

     const { comment,rating} = req.body;
    // data validation

    const result = await Review.findByIdAndUpdate(id, {
        comment,
        rating,
    });

    res.json({
        success: true,
        message: `Review has been updated successfully.`
    })
}

export const deleteReviewById = async (req, res) => {
    
    const id = req.params.id;
    // code to delete movie 
    const review = await Review.findById(id);
    if (!review) {
        res.json({
            success: false,
            message: 'There is no such review with that id'
        })
    }

    const result = await Review.findByIdAndDelete(id);

    res.json({
        success: true,
        message: `Review has been deleted`
    })
}

