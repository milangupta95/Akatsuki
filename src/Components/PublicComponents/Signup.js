import { Button, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useNavigate } from 'react-router';
import KeyIcon from '@mui/icons-material/Key';
import PinIcon from '@mui/icons-material/Pin';

function Signup() {
    const navigate = useNavigate();
    const [otpDisable, setOtpDisabled] = useState(true);
    const [otherDisabled, setOtherDisabled] = useState(false);
    const [brandname, setBrandName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [fname, setfName] = useState("")
    const [lname, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [feedback, setFeedback] = useState("")
    const [pasword,setPassword] = useState("")
    const [confirmpassword,setconfirmpassword] = useState("")
    const [otp,setOtp] = useState("")

    const handleSignup = () => {
        navigate("/login");
    }

    const handleSendOtp = () => {
        setOtpDisabled(false);
        setOtherDisabled(true);
    }

    return (
        <div className='flex h-[92vh] justify-center items-center'>
            <div className='bg-violet-900 rounded-l-lg h-[677px] w-[45%] text-white px-12 pt-20'>
                <h1 className='text-4xl font-bold font-sans'><Typewriter
                    options={{
                        strings: ['Unlock the power of AI with RetailSense'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h1>
                <img src='picds.webp' />
            </div>
            <div className='shadow-lg md:w-[50%] w-[100%] sm:w-[40%] rounded-r-lg h-[677px]'>
                <div className='flex h-[180px] justify-center '>
                    <div className='w-full rounded-tr-lg'>
                        <img src='bag2.jpg' className='w-full h-full rounded-tr-lg' />
                    </div>
                </div>
                <div className='space-y-2 flex-end rounded-br-lg p-2 bg-white-400'>
                    <h1 className='text-xl font-bold text-purple-800'> Enter Shop Details </h1>
                    <div className='flex items-center justify-between'>
                        <TextField
                            value={brandname}
                            placeholder='Brand Name'
                            // disabled={phoneTextDisabled}
                            onChange={(e) => setBrandName(e.target.value)}
                            required
                            inputProps={{
                                maxLength: 13,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AddBusinessIcon style={{ color: 'purple' }} />
                                    </InputAdornment>
                                ),
                            }}
                            className='w-[45%]'
                        />
                    </div>
                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <TextField value={fname}
                                className='w-[45%]'
                                onChange={(e) => setfName(e.target.value)}
                                placeholder='First Name'
                                // disabled={otherDisabled}
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
                                className='w-[45%]'
                                onChange={(e) => setLName(e.target.value)}
                                placeholder='Last Name'
                                // disabled={otherDisabled}
                                required
                            />
                        </div>

                        <div className='flex items-center justify-between'>
                            <TextField value={email}
                                className='w-[45%]'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                // disabled={otherDisabled}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                value={mobileNumber}
                                placeholder='+91 XXXXXXXX'
                                // disabled={phoneTextDisabled}
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
                                className='w-[45%]'
                            />
                        </div>
                        <TextField value={address}
                            className='w-full'
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Address'
                            // disabled={otherDisabled}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HomeIcon style={{ color: 'purple' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className='flex items-center justify-between'>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                type="password"
                                className='w-[45%]'
                                placeholder='Password'
                                value={pasword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon style={{ color: 'purple' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                type="password"
                                className='w-[45%]'
                                placeholder='Confirm Password'
                                value={confirmpassword}
                                onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                        </div>
                        <button
                            variant='contained'
                            onClick={handleSendOtp}
                            className='w-full bg-purple-800 p-2 rounded-lg h-[55px] text-white font-bold disabled:bg-slate-100 disabled:text-gray-300'
                            disabled={otherDisabled}
                            style={{}}
                        >Send OTP</button>

                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PinIcon style={{ color: 'purple' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className='w-[45%]'
                                    placeholder='OTP'
                                    disabled={otpDisable}
                                />
                                <button
                                    variant='contained'
                                    onClick={handleSignup}
                                    className='w-[45%] bg-purple-800 p-2 rounded-lg h-[55px] text-white font-bold disabled:bg-slate-100 disabled:text-gray-300'
                                    disabled={otpDisable}
                                    style={{}}
                                >Verify Details and Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup