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

export const createMovie = async (req, res) => {
    const { name, rating, description } = req.body;
    //code to send in database
    const movie = await Movie.create({
        title: name,
        rating,
        description
    })
    res.json({
        success: true,
        message: 'Movie created Successfully'
    })
}

export const updateMovieById = async (req, res) => {
    const id = req.params.id;
    //code to update movie
    const movie = await Movie.findById(id);
    if (!movie) {
        res.json({
            success: false,
            message: 'There is no such movie with that id'
        })
    }

    const { title, description, rating } = req.body
    // data validation

    const result = await Movie.findByIdAndUpdate(id, {
        title,
        description,
        rating
    });


    res.json({
        success: true,
        message: `Movie with ${id} has been updated.`
    })
}

export const deleteMovieById = async (req, res) => {
    
    const id = req.params.id;
    // code to delete movie 
    const movie = await Movie.findById(id);
    if (!movie) {
        res.json({
            success: false,
            message: 'There is no such movie with that id'
        })
    }

    const result = await Movie.findByIdAndDelete(id);

    res.json({
        success: true,
        message: `Movie with ${id} has been deleted`
    })
}

// module.exports = getMovies;