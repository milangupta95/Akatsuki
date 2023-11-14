import React from 'react'
import IButtonTooltip from '../Common/IButtonTooltip'
import { IconButton, Select, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import InfoBox from './InfoBox';
import CouponForCustomer from '../Coupons/CouponForCustomer';
import PurchaseTable from './PurchaseTable';
import { useState } from 'react';
import StoreVisitGraph from './StoreVisitGraph';
import MonthlyPurchaseGraph from './MonthlyPurchaseGraph';
function CustomerProfile() {
    const navigate = useNavigate();
    const [year, setYear] = useState(2023);

    const storeVisitData =
    [
        {
            "value": 237,
            "day": "2023-05-17"
        },
        {
            "value": 41,
            "day": "2023-09-27"
        },
        {
            "value": 43,
            "day": "2023-03-24"
        },
        {
            "value": 223,
            "day": "2023-07-08"
        }]
    const moveToCustomerPage = () => {
            navigate('/dashboard/customers')
        }
    return (
        <div>
            <div className='flex p-4 space-x-8'>
                <div>
                    <IconButton onClick={moveToCustomerPage}>
                        <ArrowBackIcon />
                    </IconButton>
                    <img src='https://i.pinimg.com/736x/5b/5b/33/5b5b332889c7ef2baa9a328a1d8e31e1.jpg' className='w-40 h-40 rounded-lg' />
                    <p className='text-center font-bold'>{'John Doe'}</p>
                </div>
                <div className='w-[90%]'>
                    <div className='flex items-center justify-between border-b-2'>
                        <h1 className='text-lg font-bold'>Personal Details</h1>
                        <IButtonTooltip message={"Customer Details"} />
                    </div>
                    <div className='space-y-4 py-2 px-4'>
                        <div className='flex item-center justify-between'>
                            <InfoBox valueType='Name' value={'Milan Kumar Gupta'} />
                            <InfoBox valueType='Mobile Number' value={'9140076991'} />
                            <InfoBox valueType='Email' value={'milangupta95@gmail.com'} />
                        </div>
                        <div className='flex item-center justify-between'>
                            <InfoBox valueType='Last Visited' value={'07/05/2002'} />
                            <InfoBox valueType='Total Purchase' value={'$1000'} />
                            <InfoBox valueType='Visit Frequency' value={'5'} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className='p-4 flex item-center justify-between '>
                <div className='w-[49%] h-[400px] rounded-lg shadow-md p-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-xl font-bold text-violet-800'>Customer Store Visits</h1>
                        <TextField type='number' size='small' sx={{ width: 100 }} value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <StoreVisitGraph data={storeVisitData}/>
                </div>

                <div className='w-[49%] h-[400px] rounded-lg shadow-md p-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-xl font-bold text-violet-800'>Customer Monthly Purchases</h1>
                        <TextField type='number' size='small' sx={{ width: 100 }} value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <MonthlyPurchaseGraph/>
                </div>
            </div>

            <div className='p-4 flex item-center justify-between '>
                <div className='w-[49%] rounded-lg shadow-md p-2'>
                    <div>
                        <h1 className='font-xl font-bold text-violet-800'>Coupons For Cutomer</h1>
                    </div>
                    <CouponForCustomer />
                </div>
                <div className='w-[49%] rounded-lg shadow-md p-2'>
                    <div>
                        <h1 className='font-xl font-bold text-violet-800'>Customer Purchase History</h1>
                    </div>
                    <PurchaseTable />
                </div>
            </div>
        </div>
    )
}

export default CustomerProfile