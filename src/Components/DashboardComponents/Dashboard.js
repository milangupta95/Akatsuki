import React from 'react'
import DashboardNav from './Common/DashboardNav'
import Sidebar from './Common/Sidebar'
import { Outlet } from 'react-router'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useLocation } from 'react-router-dom'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react'
import {Modal,Box,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Chatbot from './Chatbot'

function Dashboard() {
    let location = useLocation();
    const { pathname } = location;
    const current = pathname.split("/")[2];
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='flex justify-between'>
            <div className='sticky top-0 w-[18%] h-[100vh]'>
                <Sidebar></Sidebar>
            </div>
            <div className='flex flex-col w-[82%]'>
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>
            </div>
            <button onClick={() => setModalOpen(true)} className='w-[100px] h-[100px] rounded-full fixed z-[100000] bottom-6 right-6 bg-sky-600 hover:bg-sky-800'>
                <SmartToyIcon sx={{ fontSize: '4rem', color: 'white' }} />
            </button>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)} 
            >
                <Box>
                    <div className='flex h-[100vh] justify-center w-[100vw] p-2 items-center'>
                        <div className='shadow-sm md:w-[70%] w-[50%] sm:w-[50%] rounded-r-lg h-[100%] flex items-center mx-auto'>
                            <div className='z-[100] w-full space-y-2 flex-end rounded-lg p-4 bg-white'>
                                <div className='flex item-center justify-between w-[full]'>
                                    <h1 className='text-xl font-bold text-purple-800'>Chatbot</h1>
                                    <IconButton onClick={() => setModalOpen(false)}>
                                        <CloseIcon></CloseIcon>
                                    </IconButton>
                                </div>
                                <Chatbot handleClose={() => setModalOpen(false)} />
                            </div>
                        </div>
                    </div>
                </Box>

            </Modal>
        </div>
    )
}

export default Dashboard