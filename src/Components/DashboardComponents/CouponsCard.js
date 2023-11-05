import React from 'react'
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CouponsCard(props) {
    let coupon = props.coupon;

    const editcoupon = () => {

    }

    const deletecoupon = () => {

    }

    const notifyusers = () => {

    }

    return (
        <div className='w-[350px] h-[250px] shadow-md rounded-lg bg-gradient-to-r from-gray-100 to-gray-200  text-black'>
            <div className='h-[81%] p-2 border-b-4 '>
                <div class="">
                    Coupon Code:- {coupon.code}
                </div>
                <p className='text-md font-bold'>{coupon.description}</p>

                <div class="text-sm mt-4">
                    <p>Valid until <span class="font-semibold">December 31, 2023</span></p>
                    <p>Terms and conditions apply.</p>
                </div>
            </div>
            <div className='h-[19%] p-2 flex flex-end justify-between items-center'>
                <Button variant='contained' color='primary' onClick={notifyusers} disableElevation>Notify Users</Button>
                <div>
                    <IconButton color='secondary' onClick={editcoupon}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color='error' onClick={deletecoupon}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default CouponsCard