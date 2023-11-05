import React from 'react'
import { Link } from 'react-router-dom'
function DashboardNav() {
    return (
        <div className='w-full flex p-2 items-center backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-[100] h-[70px] shdaow-lg shadow-gray-500'>
            <div className='flex flex-col justify-center items-center'>
                <Link to='/dashboard'><img src='/store.png' className='w-[40px] h-[40px]' /></Link>
                <p className='font-bold text-xs'>Retailsense</p>
            </div>
        </div>

    )
}

export default DashboardNav