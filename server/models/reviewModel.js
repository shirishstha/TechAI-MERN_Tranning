const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        comment:{
            type :String,
            required:true
        },
        rating:{
            type: Number,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:true,
        },
        movie:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'movies',
            required:true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('review', reviewSchema);