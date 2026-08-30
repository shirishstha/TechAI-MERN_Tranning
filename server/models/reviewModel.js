const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        message:{
            type :String
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('review', reviewSchema);