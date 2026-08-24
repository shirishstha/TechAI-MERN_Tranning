import Movie from '../models/movieModel.js'

export const getMovies = (req, res) => {
    res.json({
        success: true,
        message: 'Movies fetched successfully'
    })
}

export const getAMovieWithId = async (req, res) => {
    const id = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
        res.json({
            success: false,
            message: 'There is no such movie with that id'
        })
    }

    res.json({
        success: true,
        message: 'Movie fetched successfully',
        data: movie
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