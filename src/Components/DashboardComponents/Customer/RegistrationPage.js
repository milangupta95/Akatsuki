import { TextField, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { FormControl,RadioGroup,FormControlLabel,Radio,FormLabel } from '@mui/material';
import { api } from '../utility/api';
import { Snackbar, Alert } from '@mui/material';

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
    const [gender, setGender] = React.useState("male");
    const [customer, setCustomer] = useState(null);
    const [age,setAge] = useState(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
    const [showNotification, setShowNotification] = React.useState(false);
    const customers = props.customers;
    const setCustomers = props.setCustomers;

    const register = async () => {
        try {
            if (mobileNumber && mobileNumber.length === 10) {
                console.log(mobileNumber);
                let customerRes = await api.get(`/customer/retrieve/${mobileNumber}`);
                if (customerRes) {
                    console.log(customerRes);
                    setOtherDisabled(false);
                    setphoneTextDisabled(true);
                    if (customerRes.status === 200) {
                        let customer = customerRes.data;
                        setMessage("Customer Already in Database");
                        setMessageType("success");
                        setShowNotification(true);
                        setfName(customer.first_name);
                        setLName(customer.last_name);
                        setEmail(customer.email);
                        setAddress(customer.address);
                        setFeedback(customer.feedback);
                        setGender(customer.gender);
                        setAge(customer.age);
                        setCustomer(customerRes.data);
                    } else {
                        setMessage("Customer Not Registered Enter Details");
                        setMessageType("success");
                        setShowNotification(true);
                    }
                }
            } else {
                setMessage("Invalid Mobile Number");
                setMessageType("error");
                setShowNotification(true);
            }
        } catch (err) {
            setOtherDisabled(false);
            setphoneTextDisabled(true);
            setMessage("Customer Not Found Please Register");
            setMessageType("error");
            setShowNotification(true);
        }
    }

    const handleData = async () => {
        try {
            let newCustomer = {
                "phone_number": mobileNumber,
                "first_name": fname,
                "last_name": lname,
                "email": email,
                "total_bill_amount": billAmmount,
                "visit_frequency" : 1,
                "address": address,
                "feedback": feedback,
                "gender" : gender,
                "age" : age
            }
            if (!customer) {
                let res = await api.post("/customer", newCustomer);
                if (res) {
                    if (res.status === 200) {
                        const cust = res.data;
                        const newCustomers = [
                            ...customers,
                            cust
                        ];
                        setCustomers(
                            newCustomers
                        );
                        let purchaseRes = await api.post("/purchase", {
                            product_name: "",
                            product_price: billAmmount,
                            customer_id: cust.customer_id
                        });
                        if (purchaseRes) {
                            if (purchaseRes.status === 200) {
                                setMessage("User Added SuccessFully and Purchase Added");
                                setMessageType("success");
                                setShowNotification(true);
                            } else {
                                setMessage("User Added SuccessFully but unable Purchase Added");
                                setMessageType("error");
                                setShowNotification(true);
                            }
                        }
                    } else {
                        setMessage("There Might Be Some Error");
                        setMessageType("error");
                        setShowNotification(true);
                    }
                }
            } else {
                let oldCustomer = {
                    "phone_number": mobileNumber,
                    "first_name": fname,
                    "last_name": lname,
                    "email": email,
                    "bill_amount": billAmmount,
                    "address": address,
                    "feedback": feedback,
                    "gender" : gender,
                    "age" : age
                }
                let res = await api.put(`/customer/${customer.customer_id}`, oldCustomer);
                if (res) {
                    if (res.status === 200) {
                        let purchaseRes = await api.post("/purchase", {
                            product_name: "",
                            product_price: billAmmount,
                            customer_id: res.data.customer_id
                        });
                        if (purchaseRes) {
                            if (purchaseRes.status === 200) {
                                setMessage("User updated SuccessFully and Purchase Added");
                                setMessageType("success");
                                setShowNotification(true);
                            } else {
                                setMessage("User Added SuccessFully but unable Purchase Added");
                                setMessageType("error");
                                setShowNotification(true);
                            }
                        }
                    } else {
                        setMessage("There might be Some Error");
                        setMessageType("error");
                        setShowNotification(true);
                    }
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
                                placeholder='Age' className='w-20'/>

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
            <Snackbar open={showNotification} autoHideDuration={6000} onClose={() => setShowNotification(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setShowNotification(false)} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default RegistrationPage


