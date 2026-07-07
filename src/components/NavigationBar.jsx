import React from 'react'

const NavigationBar = () => {
    return (
        <div className='flex  items-center gap-4 bg-fuchsia-50'>
            <div>
                <img
                src='lady.jpg'
                className='w-18  rounded-full'
                />
            </div>
            <h2 className='text-lg font-semibold ' >
                Movie Explorer
            </h2 >
        </div>
    )
}

export default NavigationBar