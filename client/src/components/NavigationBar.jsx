import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div className='flex  items-center gap-4  w-full justify-between p-4'>
            <h2 className='text-lg font-medium whitespace-nowrap' >
                <span className='text-rose-700 text-2xl'>Movie</span>  Explorer
            </h2 >
            <div>
                <input
                    type="text"
        className='border border-rose-900 mx-2 rounded-lg '
                />
                <button >Search</button>
            </div>
            <nav className='flex justify-center gap-12 '>
                <span className='hover:underline underline-offset-5 hover:text-rose-700'><Link to="/about">Home</Link> </span>
                <span className='hover:underline underline-offset-5 hover:text-rose-700'>About Us</span>
                <span className='hover:underline underline-offset-5 hover:text-rose-700'>Trending</span>
            </nav>
        </div>
    )
}

export default NavigationBar