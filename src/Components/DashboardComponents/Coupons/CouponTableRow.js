import React from 'react'
import { Button, ButtonGroup, IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import CouponForm from './CouponUpdateForm';
import CouponUpdateForm from './CouponUpdateForm';
import { useState } from 'react';

const columns = [
    { id: 'code', label: 'Coupon Code', minWidth: 100 },
    { id: 'date_created', label: 'Date Created', minWidth: 100 },
    {
        id: 'date_expiry',
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
        id: 'discount',
        label: 'Discount',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'prev_purchase_value',
        label: 'Previous Purchase Value',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'prev_freq_value',
        label: 'Store Visit Freq',
        minWidth: 170,
        align: 'right',
    },
];
function CouponTableRow(props) {
    let coupon = props.coupon;
    let [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const editcoupon = () => {

    }

    const deletecoupon = () => {

    }

    const notifyusers = () => {

    }

    return (
        
            <TableRow hover role="checkbox" tabIndex={-1} key={coupon.code}>
                {columns.map((column) => {
                    const value = coupon[column.id];
                    return (
                        <TableCell key={column.id} align={'center'}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                        </TableCell>
                    );
                })}
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
                        <CouponUpdateForm handleClose={handleClose} coupon={props.coupon} />
                    </Box>

                </Modal>
            </TableRow>
    )
}

export default CouponTableRow