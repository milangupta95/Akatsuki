import React from 'react'
import DashboardNav from './Common/DashboardNav'
import Sidebar from './Common/Sidebar'
import { Outlet } from 'react-router'
import Footer from '../PublicComponents/Footer'
import { useLocation } from 'react-router-dom'
function Dashboard() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    return (
        <div className='flex justify-between'>
            <div className={current === 'setup' ? 'hidden' : 'sticky top-0 w-[18%] h-[100vh]'}>
                <Sidebar></Sidebar>
            </div>
            <div className={current === 'setup' ?  'w-[100%]' : 'flex flex-col w-[82%]'}>
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard