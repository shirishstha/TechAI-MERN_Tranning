export const getMovies = (req, res) => {
    res.json({
        success: true,
        message:'Movies fetched successfully'
    })
}

export const getAMovieWithId = (req, res) => {
    const id = req.params;
    res.json({
        success: true,
        message: 'Movie fetched successfully',
        data: {id}
    })
}

export const createMovie = (req, res) => {
    const { name, publishedYear, description } = req.body();
    //code to send in database

    res.json({
        success: true,
        message: 'Movie created Successfully'
    })
}

export const updateMovieById = (req, res) => {
    const id = req.params.id;
    //code to update movie


    res.json({
        success: true,
        message: `Movie with ${id} has been updated.`
    })
}

export const deleteMovieById = (req, res) => {
    const id = req.params.id;
    // code to delete movie 

    res.json({
        success: true,
        message: `Movie with ${id} has been deleted`
    })
}

// module.exports = getMovies;