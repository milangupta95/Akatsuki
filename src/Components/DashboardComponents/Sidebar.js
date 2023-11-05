import { Avatar } from '@mui/material'
import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import DiscountIcon from '@mui/icons-material/Discount';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';

const active = {
    main: "flex items-center space-x-2 p-2 rounded-lg bg-blue-200",
    icon: {
        color: 'primary'
    },
    text: "text-blue-500"
}

const notactive = {
    main: "flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-100",
    icon: {
        color: 'secondary'
    },
    text: "text-gray-500"
}
function Sidebar() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    console.log(current);
    return (
        <div className='bg-gray-100 h-[100%] space-y-8 border-r-2 border-dotted border-gray-400 p-2'>
            <div>
                <p className='text-4xl font-bold'>Dashboard</p>
                <p className='text-sm'>An offering from RetailSense</p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg h-[70px] w-full flex items-center space-x-4'>
                <Avatar></Avatar>
                <p className='font-bold'>Admin</p>
            </div>
            <div className='space-y-4'>
                <div className={current === 'analytics' ? active.main : notactive.main}>
                    <Link to='/dashboard/analytics'>
                        <BarChartIcon color={current === 'analytics' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'analytics' ? active.text : notactive.text}>Customer analytics</span>
                    </Link>
                </div>

                <div className={current === 'store' ? active.main : notactive.main}>
                    <Link to='/dashboard/store'>
                        <StorefrontIcon color={current === 'store' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'store' ? active.text : notactive.text}>Store analytics</span>
                    </Link>
                </div>

                <div className={current === 'stream' ? active.main : notactive.main}>
                    <Link to='/dashboard/stream'>
                        <div className='flex items-center'><span>
                            <svg style={{ "color": 'rgb(94, 139, 186)' }} width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 0H0V48H48V0Z" fill="#5e8bba" fill-opacity="0.01"></path><path d="M19.0059 26.2758V37H5" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#5e8bba"></path><path d="M42.6205 21.2153L38.7568 20.18L34.7544 27.3898L40.55 28.9427L42.6205 21.2153Z" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#5e8bba"></path><path d="M38.7566 20.18L34.7542 27.3898L33.0118 30.0287L5 22.523L8.62347 9L40.499 17.541L38.7566 20.18Z" fill="#5e8bba" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>
                            <span className={current === 'stream' ? active.text : notactive.text}>CCTV Survilance</span>
                        </div>
                    </Link>
                </div>


                <div className={current === 'customers' ? active.main : notactive.main}>
                    <Link to='/dashboard/customers'>
                        <PeopleIcon color={current === 'customers' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'customers' ? active.text : notactive.text}>Customers</span>
                    </Link>
                </div>


                {/* <div className={current === 'register' ? active.main : notactive.main}>
                    <Link to='/dashboard/register'>
                        <PersonAddAltIcon color={current === 'register' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'regsiter' ? active.text : notactive.text}>Register Customer</span>
                    </Link>
                </div> */}


                <div className={current === 'coupons' ? active.main : notactive.main}>
                    <Link to='/dashboard/coupons'>
                        <DiscountIcon color={current === 'coupons' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'coupons' ? active.text : notactive.text}>Coupons</span>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Sidebar