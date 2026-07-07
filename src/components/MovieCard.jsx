import React from 'react'

const MovieCard = ({ name, rating, description, link }) => {
    console.log("Link",link);
    return (
        <div className='shadow-lg max-w-sm'>
            <img src={`https://image.tmdb.org/t/p/w500${link}`} className='aspect-video object-cover
            ' />
            <div className='p-6'>
                <h3 className=' '>{name}</h3>
                <h4 className=''> {rating}</h4>
                <p className=''>{description}</p>
            </div>
        </div>
    )
}

export default MovieCard