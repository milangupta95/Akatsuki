import { Button, TextField, InputAdornment, IconButton, formGroupClasses } from '@mui/material'
import React, { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import { api } from '../utility/api';
import { Snackbar, Alert } from '@mui/material';
import {FormControl,FormControlLabel,RadioGroup,Radio,FormLabel} from '@mui/material'

function CustomerUpdateForm(props) {
    let setCustomer = props.setCustomer;
    let customer = props.customer;
    const [mobileNumber, setMobileNumber] = useState(customer.phone_number)
    const [fname, setfName] = useState(customer.first_name)
    const [lname, setLName] = useState(customer.last_name)
    const [email, setEmail] = useState(customer.email)
    const [address, setAddress] = useState(customer.address)
    const [gender,setGender] = useState(customer.gender);
    const [age,setAge] = useState(customer.age);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
    const [showNotification, setShowNotification] = React.useState(false);

    const handleUpdate = async () => {
        try {
            let res = await api.put(`customer/${customer.customer_id}/`, {
                phone_number: mobileNumber,
                first_name: fname,
                last_name: lname,
                email: email,
                address: address,
                age: age,
                gender: gender
            });
            if (res) {
                if (res.status === 200) {
                    setCustomer(res.data);
                    setMessage("Data Updated Successfully");
                    setMessageType("success");
                    setShowNotification(true);
                } else {
                    setMessage("There is Some Error While Deleting");
                    setMessageType("error");
                    setShowNotification(true);
                }
            }
        } catch (err) {
            setMessage(err.message);
            setMessageType("error");
            setShowNotification(true);
        }
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

                        <TextField value={email}
                            className='w-[49%]'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{ color: 'purple' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                            <TextField value={fname}
                                className='w-[49%]'
                                onChange={(e) => setfName(e.target.value)}
                                placeholder='First Name'
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
                                required
                            />
                        </div>

                        <div>

                            <TextField value={address}
                                className='w-full'
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Address'
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


                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-between w-[49%]'>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>

                                <TextField value={age} type='number' min={5} onChange={(e) => setAge(e.target.value)}
                                    placeholder='Age' className='w-20' />

                            </div>
                            <button
                                variant='contained'
                                onClick={handleUpdate}
                                className='w-[49%] bg-purple-800 p-2 rounded-lg h-[55px] text-white font-bold disabled:bg-slate-100 disabled:text-gray-300'
                                style={{}}
                            >Update Data</button>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={showNotification} autoHideDuration={6000} onClose={() => setShowNotification(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setShowNotification(false)} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CustomerUpdateForm


