const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        rating: {
            type: Number
        },
        posterUrl: {
            type: String
        },
        genre: {
            type: String
        },
        releaseDate: {
            type: Date
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('Movie', movieSchema)