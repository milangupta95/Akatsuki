import React from 'react'
import { Button, IconButton, ButtonGroup } from '@mui/material'
import { useTheme } from '@emotion/react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import CouponForm from './CouponAddForm';
import CouponsTable from './CouponsTable';

function Coupons() {
    const theme = useTheme();
    const [parameter, setParameter] = React.useState('date');
    const options = ['Date Added', 'Purchase Value'];
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [page, setPage] = React.useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handleClick = () => {
        if (selectedIndex == 1) {

        } else if (selectedIndex == 0) {

        }
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };


    // const handleChange = (event) => {
    //     setParameter(event.target.value);
    // };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return (
        <div className='space-y-8 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Coupons</h1>
                <Button onClick={handleOpen} color='secondary' variant='contained' className='z-[0]' disableElevation>Add a Coupon</Button>
            </div>

            <div className='flex shadow-lg flex-col rounded-lg space-y-2'>
                <CouponsTable />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                className='w-[50%]'
            >
                <Box>
                    <CouponForm handleClose={handleClose} />
                </Box>

            </Modal>
        </div>
    )
}

export default Coupons