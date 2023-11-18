import React from 'react'
import { Button} from '@mui/material'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import CouponForm from './CouponAddForm';
import CouponsTable from './CouponsTable';
import { api } from '../utility/api'
import { useState, useEffect } from 'react';

function Coupons() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [coupons, setCoupons] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await api.get("/coupon");
                if (res) {
                    if (res.status === 200) {
                        setCoupons(res.data);
                    } else {
                        setError("There is Some Error");
                    }
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        })();
    }, [])


    return (
        <div className='space-y-8 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Coupons</h1>
                <Button onClick={handleOpen} color='secondary' variant='contained' className='z-[0]' disableElevation>Add a Coupon</Button>
            </div>

            <div className='flex shadow-lg flex-col rounded-lg space-y-2'>
                <CouponsTable coupons={coupons} setCoupons={setCoupons} error={error} setError={setError}
                    loading={loading} setLoading={setLoading} />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                className='w-[50%]'
            >
                <Box>
                    <CouponForm coupons={coupons} setCoupons={setCoupons} handleClose={handleClose} />
                </Box>

            </Modal>
        </div>
    )
}

export default Coupons