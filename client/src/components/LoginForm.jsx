import { useState } from "react";
import api from "../../api/api";
import NavigationBar from "./NavigationBar";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
            if (!email || !password) {
                return console.log('All fields must be set.');
            }
            const res = await api.post('/user/login', {
                email,
                password
            })

            localStorage.setItem('token', res.data.token);
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <NavigationBar />
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-lg shadow-lg gap-3 p-3 rounded">
                    <h1 className="text-center text-2xl">Login Form</h1>
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 p-1 rounded" />
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="border border-gray-400  p-1 rounded" />
                    </div>
                    <button onClick={() => loginUser()} className='p-2 text-sm text-gray-200 bg-red-600 rounded'>Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm