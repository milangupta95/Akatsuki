import React from 'react'
import DashboardNav from './DashboardNav'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import Footer from '../PublicComponents/Footer'

function Dashboard() {
    return (
        <div className='flex justify-between'>
            <div className='sticky top-0 w-[18%] h-[100vh]'>
            <Sidebar></Sidebar>
            </div>
            <div className='flex flex-col w-[82%]'>
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard