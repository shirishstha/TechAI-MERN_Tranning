import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [movie, setMovie] = useState({});

    const fetchMovieById = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=06e837b00948d8a222316a4fe3052c8d`);
        const data = await res.json();
        console.log(data);
        setMovie(data);
        const { title } = data;
        console.log(title);
    }

    useEffect(() => {
        fetchMovieById();
    }, [id])
    return (

        <div>MovieDetails:{id}</div>
    )
}

export default MovieDetails