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

function CouponForm(props) {
    let handleClose = props.handleClose;
    console.log("Coupons")

    const [couponCode, setcouponCode] = useState("");
    const [description, setDescription] = useState("");
    const [discountType, setDiscountType] = useState("exact");
    const [value, setValue] = React.useState(0);
    const [expiry, setExpiry] = React.useState(dayjs('2022-04-17'));
    const [discountValue, setDiscountValue] = useState(null);
    const [previousPurchase,setpreviousPurchase] = useState(null);
    const [freqvisit,setFreqvis] = useState(null);

    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const generateCouponCode = () => {
        setcouponCode("DIWALI500");
    }

    const addCoupon = () => {

    }

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
                                className='p-2 h-[55px] bg-gray-600 rounded-lg
                            text-white w-[49%] hover:bg-gray-700 font-bold
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
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={"exact"}>Exact Discount Type</MenuItem>
                                                <MenuItem value={"percentage"}>Percentage</MenuItem>
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
                                            <label className='text-lg'>Coupon Expiry</label>

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker label="Select Expiry Date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
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
                            className='p-2 h-[55px] bg-gray-600 rounded-lg
                            text-white w-[100%] hover:bg-gray-700 font-bold
                            disabled:bg-slate-100 disabled:text-gray-300'
                            onClick={addCoupon}
                        >Generate Coupon Code</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CouponForm