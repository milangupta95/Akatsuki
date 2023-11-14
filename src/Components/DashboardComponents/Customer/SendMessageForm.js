import { TextField, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SubjectIcon from '@mui/icons-material/Subject';
import CloseIcon from '@mui/icons-material/Close';

function SendMessageForm(props) {
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    let handleClose = props.handleClose;
    const customer = props.customer;
    const sendMessage = () => {
        window.alert("Message Sent To User " + customer.name + "SuccessFully"); 
        handleClose(); 
    }
    
    return (
        <div className='flex h-[100vh] justify-center w-full p-2 items-center'>
            <div className='shadow-sm md:w-[50%] w-[50%] sm:w-[50%] rounded-r-lg h-[100%] flex items-center'>
                <div className='z-[100] w-full space-y-2 flex-end rounded-lg p-4 bg-white'>
                    <div className='flex w-[full] items-center justify-between'>
                        <h1 className='text-xl font-bold text-purple-800'> Enter Subject and message </h1>
                        <IconButton onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <TextField value={subject}
                                className='w-full'
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder='Subject'
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SubjectIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={4}
                                variant='outlined'
                                className='w-full'
                                placeholder='Message'
                            ></TextField>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                variant='contained'
                                onClick={sendMessage}
                                className='w-[100%] bg-purple-800 p-2 rounded-lg h-[55px] text-white font-bold disabled:bg-slate-100 disabled:text-gray-300'
                                style={{}}
                            >Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMessageForm


