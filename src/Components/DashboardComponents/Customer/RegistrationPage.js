import { Button, TextField, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Modal from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Rating } from '@mui/material';

function RegistrationPage(props) {
    const [phoneTextDisabled, setphoneTextDisabled] = useState(false);
    const [otherDisabled, setOtherDisabled] = useState(true)
    const [mobileNumber, setMobileNumber] = useState("")
    const [fname, setfName] = useState("")
    const [lname, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [feedback, setFeedback] = useState("")
    const [billAmmount, setbillAmmount] = useState(null);
    const [rating, setRating] = React.useState(2);
    const customers = props.customers;
    const setCustomers = props.setCustomers;
    console.log(customers);
    const register = () => {
        setOtherDisabled(false);
        setphoneTextDisabled(true);
    }

    const handleData = () => {
        const newCustomers = [
            ...customers,
            {
                id: 2,
                name: fname + lname,
                mobile: mobileNumber,
                email: email,
                address: address,
                feedback: feedback
            }
        ];
        console.log(newCustomers);
        setCustomers(
            newCustomers
        )
    }

    let handleClose = props.handleClose;
    return (

        <div className='flex h-[100vh] justify-center w-full p-2 items-center'>

            <div className='shadow-sm md:w-[50%] w-[50%] sm:w-[50%] rounded-r-lg h-[100%] flex items-center'>
                <div className='z-[100] w-full space-y-2 flex-end rounded-lg p-4 bg-white'>
                    <div className='flex w-[full] items-center justify-between'>
                        <h1 className='text-xl font-bold text-purple-800'> Enter Customer Details </h1>
                        <IconButton onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </div>

                    <div className='flex items-center justify-between'>
                        <TextField
                            value={mobileNumber}
                            placeholder='+91 XXXXXXXX'
                            disabled={phoneTextDisabled}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                            inputProps={{
                                maxLength: 13,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon style={{ color: 'purple' }} />
                                    </InputAdornment>
                                ),
                            }}
                            className='w-[49%]'
                        />
                        <button
                            className='p-2 h-[55px] bg-purple-800 rounded-lg
                            text-white w-[49%] hover:bg-purple-900 font-bold
                            disabled:bg-slate-100 disabled:text-gray-300'
                            disabled={phoneTextDisabled}
                            onClick={register}
                        >Register</button>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                            <TextField value={fname}
                                className='w-[49%]'
                                onChange={(e) => setfName(e.target.value)}
                                placeholder='First Name'
                                disabled={otherDisabled}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField value={lname}
                                className='w-[49%]'
                                onChange={(e) => setLName(e.target.value)}
                                placeholder='Last Name'
                                disabled={otherDisabled}
                                required
                            />
                        </div>

                        <div className='flex items-center justify-between'>
                            <TextField value={email}
                                className='w-[49%]'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                disabled={otherDisabled}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField value={billAmmount}
                                className='w-[49%]'
                                onChange={(e) => setbillAmmount(e.target.value)}
                                placeholder='Bill Ammount'
                                disabled={otherDisabled}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CurrencyRupeeIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div>

                            <TextField value={address}
                                className='w-full'
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Address'
                                disabled={otherDisabled}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <HomeIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div>
                            <TextField
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                multiline
                                rows={4}
                                variant='outlined'
                                className='w-full'
                                disabled={otherDisabled}
                                placeholder='Feedback'
                            ></TextField>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='w-[49%]'>
                                <Rating
                                    size='large'
                                    precision={0.5}
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </div>
                            <button
                                variant='contained'
                                onClick={handleData}
                                className='w-[49%] bg-purple-800 p-2 rounded-lg h-[55px] text-white font-bold disabled:bg-slate-100 disabled:text-gray-300'
                                disabled={otherDisabled}
                                style={{}}
                            >Submit Data and Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage


