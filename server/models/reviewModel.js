const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        comment:{
            type :String,
            required:true
        },
        rating:{
            type: Number,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },
        movie:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movie',
            required:true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('review', reviewSchema);