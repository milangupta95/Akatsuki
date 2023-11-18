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
import SettingsIcon from '@mui/icons-material/Settings';
const active = {
    main: "flex items-center space-x-2 p-2 rounded-lg bg-[#bfc6f5]",
    icon: {
        color: 'primary'
    },
    text: "text-[#5A6ACF] font-serif ml-6"
}

const notactive = {
    main: "flex items-center space-x-2 p-2 rounded-lg hover:bg-[#bfc6f5]",
    icon: {
        color: 'secondary'
    },
    text: "text-gray-500 font-serif ml-6"
}
function Sidebar() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    return (
        <div className={`bg-[#F1F2F7] h-[100%] space-y-4 border-r-2 border-dotted border-gray-400`}>
            <div className='flex items-center space-x-4 border-b-2 p-2 pb-2'>
                <img src='/store.png' className='h-[50px] w-[50px]' />
                <p className='text-2xl font-bold font-mono text-[#6878e0] italic'>RetailSense</p>
            </div>

            <div className='space-y-2 p-2'>
                <p className='ml-4 text-gray-400'>MENU</p>
                <div className={current === 'analytics' ? active.main : notactive.main}>
                    <Link to='/dashboard/analytics'>
                        <BarChartIcon style={{ fontSize: '1.8rem' }} color={current === 'analytics' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'analytics' ? active.text : notactive.text}>Dashboard</span>
                    </Link>
                </div>

                <div className={current === 'store' ? active.main : notactive.main}>
                    <Link to='/dashboard/store'>
                        <StorefrontIcon style={{ fontSize: '1.8rem' }} color={current === 'store' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'store' ? active.text : notactive.text}>Store analytics</span>
                    </Link>
                </div>

                <div className={current === 'stream' ? active.main : notactive.main}>
                    <Link to='/dashboard/stream'>
                        <CameraIndoorIcon style={{ fontSize: '1.8rem' }} color={current === 'stream' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'stream' ? active.text : notactive.text}>Video Analysis</span>
                    </Link>
                </div>


                <div className={current === 'customers' || current === 'customer' ? active.main : notactive.main}>
                    <Link to='/dashboard/customers'>
                        <PeopleIcon style={{ fontSize: '1.8rem' }} color={current === 'customers' || current === 'customer' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'customers' || current === 'customer' ? active.text : notactive.text}>Customers</span>
                    </Link>
                </div>

                <div className={current === 'coupons' ? active.main : notactive.main}>
                    <Link to='/dashboard/coupons'>
                        <DiscountIcon style={{ fontSize: '1.8rem' }} color={current === 'coupons' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'coupons' ? active.text : notactive.text}>Coupons</span>
                    </Link>
                </div>

            </div>

            <div className='space-y-2 p-2'>
                <p className='ml-4 text-gray-400'>OTHERS</p>
                <div className={current === 'setup' ? active.main : notactive.main}>
                    <Link to='/dashboard/setup'>
                        <SettingsIcon style={{ fontSize: '1.8rem' }} color={current === 'setup' ? active.icon.color : notactive.icon.color} fontSize='large' />
                        <span className={current === 'setup' ? active.text : notactive.text}>Store setup</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Sidebar