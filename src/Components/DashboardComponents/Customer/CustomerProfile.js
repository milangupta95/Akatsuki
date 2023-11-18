import React, { useEffect } from 'react'
import IButtonTooltip from '../Common/IButtonTooltip'
import { CircularProgress, IconButton, Select, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import InfoBox from './InfoBox';
import CouponForCustomer from '../Coupons/CouponForCustomer';
import PurchaseTable from './PurchaseTable';
import { useState } from 'react';
import StoreVisitGraph from './StoreVisitGraph';
import MonthlyPurchaseGraph from './MonthlyPurchaseGraph';
import { useSearchParams } from 'react-router-dom';
import { api } from '../utility/api';

function CustomerProfile() {
    const navigate = useNavigate();
    const [year, setYear] = useState(2023);
    const [searchParams, setSearchParams] = useSearchParams();
    const customer_id = searchParams.get("id");
    const [customer, setCustomer] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    console.log(customer_id);
    useEffect(() => {
        (async function getData() {
            setLoading(true);
            try {
                let res = await api.get(`/customer/${customer_id}`);
                if (res) {
                    if (res.status === 200) {
                        setCustomer(res.data);
                    } else {
                        setError("There Might Be Some Error");
                    }
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })()
    }, []);
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
        loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div>:<div>
            <div className='flex p-4 space-x-8'>
                <div>
                    <IconButton onClick={moveToCustomerPage}>
                        <ArrowBackIcon />
                    </IconButton>
                    <img src='https://i.pinimg.com/736x/5b/5b/33/5b5b332889c7ef2baa9a328a1d8e31e1.jpg' className='w-40 h-40 rounded-lg' />
                    <p className='text-center font-bold'>{customer.first_name + " " + customer.last_name}</p>
                </div>
                <div className='w-[90%]'>
                    <div className='flex items-center justify-between border-b-2'>
                        <h1 className='text-lg font-bold'>Personal Details</h1>
                        <IButtonTooltip message={"Customer Details"} />
                    </div>
                    <div className='space-y-4 py-2 px-4'>
                        <div className='flex item-center justify-between'>
                            <InfoBox valueType='Name' value={customer.first_name + " " + customer.last_name} />
                            <InfoBox valueType='Mobile Number' value={customer.phone_number} />
                            <InfoBox valueType='Email' value={customer.email} />
                        </div>
                        <div className='flex item-center justify-between'>
                            <InfoBox valueType='Last Visited' value={customer.updated_at.split("T")[0]} />
                            <InfoBox valueType='Total Purchase' value={"Rs." + customer.total_bill_amount} />
                            <InfoBox valueType='Visit Frequency' value={customer.visit_frequency} />
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
                    <StoreVisitGraph data={storeVisitData} />
                </div>

                <div className='w-[49%] h-[400px] rounded-lg shadow-md p-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-xl font-bold text-violet-800'>Customer Monthly Purchases</h1>
                        <TextField type='number' size='small' sx={{ width: 100 }} value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <MonthlyPurchaseGraph />
                </div>
            </div>

            <div className='p-4 flex item-center justify-between '>
                <div className='w-[49%] rounded-lg shadow-md p-2'>
                    <div>
                        <h1 className='font-xl font-bold text-violet-800'>Coupons For Cutomer</h1>
                    </div>
                    <CouponForCustomer customer_id={customer_id} />
                </div>
                <div className='w-[49%] rounded-lg shadow-md p-2'>
                    <div>
                        <h1 className='font-xl font-bold text-violet-800'>Customer Purchase History</h1>
                    </div>
                    <PurchaseTable customer_id={customer_id} />
                </div>
            </div>
        </div>
    )
}

export default CustomerProfile