import { useState } from 'react'
import api from '../../api/api';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        try {
            if (!username || !email || !password) {
                return console.log('All fields must be set.');
            }
            const res = await api.post('/user/register',{
                username,
                email,
                password
            })

            
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Register Form</h1>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => registerUser()} className='p-2 text-sm text-gray-200 bg-red-600'>Register</button>
        </div>
    )
}

export default RegisterForm