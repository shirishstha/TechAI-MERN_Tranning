import React from 'react'

const MovieCard = ({ name, rating, description, link }) => {
    return (
        <div className='shadow-lg max-w-sm rounded-lg'>
            <img src={`https://image.tmdb.org/t/p/w500${link}`} className='aspect-video object-cover rounded-t-lg
            ' />
            <div className='p-6'>
                <h3 className=' '>{name}</h3>
                <h4 className=''> {rating}</h4>
                <p className='text-sm text-gray-400 line-clamp-5'>{description}</p>
            </div>
        </div>
    )
}

export default MovieCard