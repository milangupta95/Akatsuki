import { IconButton } from '@mui/material';
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
const activeClass = 'p-4 rounded-lg text-blue-700 bg-blue-300';
const nonActiveClass = 'text-gray-400 p-4 hover:text-blue-400'
function DashboardNav() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    return (
        <div className='w-full flex p-2 items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-[100] h-[70px] shdaow-lg shadow-gray-500'>
            {/* <div className='flex flex-col justify-start w-[40%]'>
                <Link to='/dashboard'><img src='/store.png' className='w-[40px] h-[40px]' /></Link>
            </div> */}

            <div className='w-[90%] space-x-4 justify-center'>
                <Link to ="/dashboard" className={current !== 'setup' ? activeClass : nonActiveClass}>HOME</Link>
                <Link to ="/dashboard/setup" className={current === 'setup' ? activeClass : nonActiveClass}>SETUP</Link>
            </div>
            <div className='w-[10%] justify-end flex'>
                <IconButton>
                    <NotificationsNoneIcon/>
                </IconButton>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
            </div>
        </div>

    )
}

export default DashboardNav