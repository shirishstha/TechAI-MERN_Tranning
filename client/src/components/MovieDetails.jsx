import { useEffect } from "react";
import { useParams } from "react-router-dom"
import api from "../../api/api";
import { useState } from "react";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const { id } = useParams();

    //fetch movie details
    const fetchMovie = async () => {
        try {
            const res = await api.get(`/movie/${id}`,);
            setMovie(res.data.data);
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    //create review
    const addReview = async () => {
        const token = localStorage.getItem('token');
        const res = await api.post('/review/create', {
            comment: review,
            movie: id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data);
        displayReview();
    }

    //display movie review
    const displayReview = async () => {
        const res = await api.get(`/review/movie/${id}`);
        setReviews(res.data.data);
        console.log(res.data.data);
    }

    //edit review
    const editReview = async (id) => {
        const res = await api.put(`/review/update/${id}`, {
            comment: review
        },)
    }
    useEffect(() => {
        fetchMovie();
        displayReview();
    }, [])
    return (
        <>
            <div>
                <img src={movie.posterUrl} alt={movie.title} />
                <h1>{movie.title}</h1>
                <h4>{movie.description}</h4>
            </div>

            <div>
                {reviews.map((rev) => (
                    <>
                        {!editMode && <div className="flex gap-3">
                            <h1>{rev.comment}</h1>
                            <h2>{rev.user.username}</h2>
                            <button className="bg-red-600 text-white p-1" onClick={() => setEditMode(true)}>Edit</button>
                            <button className="bg-red-600 text-white p-1">Delete</button>
                        </div>}
                        {editMode && <div className="flex gap-3">
                            <input type="textarea" value={review || rev.comment} onChange={(e) => setReview(e.target.value)} />
                            <h2>{rev.user.username}</h2>
                            <button className="bg-red-600 text-white p-1" onClick={() => editReview(rev._id)}>Update</button>
                        </div>}

                    </>
                ))}

            </div>
            <div className="flex flex-col">
                <input type="textarea" className="border h-20 w-200 p-1" onChange={(e) => setReview(e.target.value)} />
                <button className="border rounded-sm p-1 w-fit" onClick={() => addReview()}>Add Review</button>
            </div>
        </>
    )
}

export default MovieDetails