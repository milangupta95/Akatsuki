import { IconButton, TextField } from '@mui/material';
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function DashboardNav() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    return (
        <div className='w-full flex p-2 items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-2 border-gray-200 sticky top-0 z-[100] h-[68px] shdaow-lg shadow-gray-500'>
            <div className='flex flex-col justify-start w-[40%]'>
                <TextField variant='outlined' size='small' placeholder='Search' InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }} />
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