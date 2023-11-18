import React from 'react'
import { Button, ButtonGroup, IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import CouponForm from './CouponUpdateForm';
import CouponUpdateForm from './CouponUpdateForm';
import { useState } from 'react';
import { api } from '../utility/api';
import {Snackbar,Alert} from '@mui/material';

const columns = [
    { id: 'coupon_code', label: 'Coupon Code', minWidth: 100 },
    {
        id: 'created_at', label: 'Date Created', minWidth: 100,
        format: (value) => value.toString().substring(0,5),
    },
    {
        id: 'expiry_date',
        label: 'Date Expiry',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'min_purchase_val',
        label: 'Minimum Purchase value',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'coupon_amount',
        label: 'Discount',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'prev_purchase_amount',
        label: 'Previous Purchase Value',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'visit_frequency',
        label: 'Store Visit Freq',
        minWidth: 170,
        align: 'right',
    },
];
function CouponTableRow({coupon,coupons,setCoupons}) {
    let [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }
    const [coupo,setCoupon] = useState(coupon);
    const [message, setMessage] = useState("");
    const [messageType,setMessageType] = useState("success");
    const [showNotification, setShowNotification] = React.useState(false);
    const deletecoupon = async () => {
        try {
            const res = await api.delete(`/coupon/${coupo.coupon_id}`);
            if (res) {
                if (res.status === 200) {
                    setMessage("Coupon Deleted SuccessFully");
                    setMessageType("success");
                    setShowNotification(true);
                    const restOfCoupon = coupons.filter((co) => co.coupon_id !== coupo.coupon_id);
                    setCoupons(restOfCoupon);
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

    const notifyusers = () => {

    }

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={coupo.coupon_id}>
            <TableCell align='center' minWidth='100'>{coupo.coupon_code}</TableCell>
            <TableCell align='center' minWidth='100'>{(coupo.created_at).toString().split("T")[0].split("-").reverse().join("-")}</TableCell>
            <TableCell align='center' minWidth='100'>{(coupo.expiry_date).toString().split("T")[0].split("-").reverse().join("-")}</TableCell>
            <TableCell align='center' minWidth='170'>{coupo.min_purchase_val}</TableCell>
            <TableCell align='center' minWidth='170'>{coupo.coupon_amount}</TableCell>
            <TableCell align='center' minWidth='170'>{coupo.prev_purchase_amount}</TableCell>
            <TableCell align='center' minWidth='170'>{coupo.visit_frequency}</TableCell>
            <TableCell>
                <ButtonGroup variant="outlined" aria-label="outlined button group" size='small'>
                    <Button variant='contained' color='primary' onClick={notifyusers} disableElevation>Notify Users</Button>
                    <Button color='secondary' onClick={handleOpen}>
                        <EditIcon />
                    </Button>
                    <Button color='error' onClick={deletecoupon}>
                        <DeleteIcon />
                    </Button>
                </ButtonGroup>
            </TableCell>
            <Modal
                open={open}
                onClose={handleClose}
                className='w-[50%]'
            >
                <Box>
                    <CouponUpdateForm handleClose={handleClose} coupon={coupo} setCoupon={setCoupon}/>
                </Box>
            </Modal>
            <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setShowNotification(false)} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </TableRow>
    )
}

export default CouponTableRow