
import { useState } from 'react'
import api from '../../api/api';
import NavigationBar from './NavigationBar';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [genre, setGenre] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await api.post("/movie/create", 
            {
                name: title,
                description: description,
                posterUrl,
                genre
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <NavigationBar />
            <div className=' flex justify-center'>
                <form className='flex flex-col gap-3 w-lg shadow-lg m-4 p-5 rounded-lg'>
                    <h1 className='text-2xl font-mono text-center'>Add Movie</h1>
                    <div className='flex flex-col gap-3 '>
                        <label>Name</label>
                        <input type='text' onChange={(e) => setTitle(e.target.value)}
                            className='border rounded-md px-3 p-0.5' />
                        <label>Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)}
                            className='border rounded-md px-3 p-0.5' />
                        <label>PosterUrl</label>
                        <input type='text' onChange={(e) => setPosterUrl(e.target.value)}
                            className='border rounded-md px-3 p-0.5' />
                        <label>genre</label>
                        <input type='text' onChange={(e) => setGenre(e.target.value)}
                            className='border rounded-md px-3 p-0.5' />
                    </div>
                    <button onClick={(e) => onSubmit(e)} className='bg-red-700 text-gray-100 px-3 p-2 rounded text-sm' >Add Movie</button>
                </form>

            </div>
        </div>
    )
}

export default MovieForm