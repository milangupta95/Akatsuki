import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import { Select, InputLabel, FormControl } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { api } from '../utility/api';
import { Snackbar,Alert } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CouponForm({handleClose,coupons,setCoupons}) {
    const [value, setValue] = React.useState(0);
    const [couponCode, setcouponCode] = useState("");
    const [description, setDescription] = useState("");
    const [discountType, setDiscountType] = useState("percentage");
    const [expiry, setExpiry] = React.useState(dayjs('2022-04-17'));
    const [discountValue, setDiscountValue] = useState(null);
    const [previousPurchase, setpreviousPurchase] = useState(null);
    const [freqvisit, setFreqvis] = useState(null);
    const [purchaseValue, setPurchaseValue] = useState(null);
    const [message, setMessage] = useState("");
    const [messageType,setMessageType] = useState("success");

    const handleDiscountChange = (e) => {
        setDiscountType(e.target.value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const generateCouponCode = () => {
        setcouponCode("DIWALI500");
    }

    const addCoupon = async () => {
        try {
            let coupon = {
                "coupon_code": couponCode,
                "description": description,
                "discount_type": discountType,
                "coupon_amount": (Number)(discountValue),
                "min_purchase_val": (Number)(purchaseValue),
                "expiry_date": expiry,
                "prev_purchase_amount": (Number)(previousPurchase),
                "visit_frequency": (Number)(freqvisit)
            }
            const res = await api.post("/coupon/", coupon);
            if (res) {
                if (res.status === 200) {
                    setMessage("Coupon Added SuccessFully");
                    setMessageType("success");
                    setCoupons(() => {
                        if(coupons.length === 0) {
                            return [res.data]
                        } else {
                            return [...coupons,res.data]
                        }
                    })
                    setShowNotification(true);
                } else {
                    setMessage("There Might Be Some Error");
                    setMessageType("error");
                    setShowNotification(true);
                }
            }
        } catch (err) {
            setMessage("There Might Be Some Error")
            setMessageType("error");
            setShowNotification(true);
        }
    }

    const [showNotification, setShowNotification] = React.useState(false);

    return (
        <div className='flex h-[100vh] justify-center w-[100vw] p-2 items-center'>
            <div className='shadow-sm md:w-[50%] w-[50%] sm:w-[50%] rounded-r-lg h-[100%] flex items-center mx-auto'>
                <div className='z-[100] w-full space-y-2 flex-end rounded-lg p-4 bg-white'>
                    <div className='flex item-center justify-between w-[full]'>
                        <h1 className='text-xl font-bold text-purple-800'> Enter Coupon Details </h1>
                        <IconButton onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-between'>
                            <TextField
                                value={couponCode}
                                placeholder='Enter Coupon Code'
                                onChange={(e) => setcouponCode(e.target.value)}
                                required
                                className='w-[49%]'
                            />
                            <button
                                className='p-2 h-[55px] bg-purple-600 rounded-lg
                            text-white w-[49%] hover:bg-purple-700 font-bold
                            disabled:bg-slate-100 disabled:text-gray-300'
                                onClick={generateCouponCode}
                            >Generate Coupon Code</button>
                        </div>

                        <TextField
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={2}
                            variant='outlined'
                            className='w-full'
                            placeholder='Description'
                        ></TextField>

                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="General" {...a11yProps(0)} />
                                        <Tab label="User Restrictions" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <div className='space-y-4'>
                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Select Discount Type</label>
                                            <Select
                                                className='w-[49%]'
                                                value={discountType}
                                                onChange={handleDiscountChange}
                                            >
                                                <MenuItem value="exact">Exact Discount Type</MenuItem>
                                                <MenuItem value="percentage">Percentage</MenuItem>
                                            </Select>
                                        </div>



                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Enter Coupon Ammount/Percentage</label>

                                            <TextField
                                                value={discountValue}
                                                onChange={(e) => setDiscountValue(e.target.value)}
                                                variant='outlined'
                                                className='w-[49%]'
                                                placeholder='Discount'
                                            ></TextField>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Enter Minimum Purchase</label>

                                            <TextField
                                                value={purchaseValue}
                                                onChange={(e) => setPurchaseValue(e.target.value)}
                                                variant='outlined'
                                                className='w-[49%]'
                                                placeholder='Minimum Purchase Ammount'
                                            ></TextField>

                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Coupon Expiry</label>

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer className='w-[49%]' components={['DatePicker']}>
                                                    <DatePicker label="Select Expiry Date" value={expiry} onChange={(newValue) => setExpiry(newValue)} />
                                                </DemoContainer>
                                            </LocalizationProvider>

                                        </div>
                                    </div>

                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <div className='flex flex-col space-y-2'>
                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Previous Purchase Ammount</label>

                                            <TextField
                                                value={previousPurchase}
                                                onChange={(e) => setpreviousPurchase(e.target.value)}
                                                variant='outlined'
                                                className='w-[49%]'
                                                placeholder='Previous Purchase of User'
                                            ></TextField>

                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <label className='text-lg'>Enter Visit Frequency</label>

                                            <TextField
                                                value={freqvisit}
                                                onChange={(e) => setFreqvis(e.target.value)}
                                                variant='outlined'
                                                className='w-[49%]'
                                                placeholder='Frequency Visit of User'
                                            ></TextField>

                                        </div>
                                    </div>
                                </CustomTabPanel>
                            </Box>
                        </div>

                        <button
                            className='p-2 h-[55px] bg-purple-600 rounded-lg
                            text-white w-[100%] hover:bg-purple-700 font-bold
                            disabled:bg-slate-100 disabled:text-gray-300'
                            onClick={addCoupon}
                        >Add coupon</button>
                    </div>

                </div>
            </div>
            <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal:"right"}}>
                <Alert onClose={() => setShowNotification(false)} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CouponForm