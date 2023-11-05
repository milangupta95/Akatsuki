import React from 'react'
import CouponsCard from './CouponsCard'
import { Button, IconButton, ButtonGroup } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@emotion/react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';

function Coupons() {
    const theme = useTheme();
    const [parameter, setParameter] = React.useState('date');
    const options = ['Date Added', 'Purchase Value'];
    const [open, setOpen] = React.useState(false);
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

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleChange = (event) => {
        setParameter(event.target.value);
    };

    const coupons = [
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        },
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        },
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        },
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        },
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        },
        {
            "code": "DIWALI500",
            "description": "Get discount of 500 on the purchase of 2000 this diwali"
        }
    ]
    return (
        <div className='space-y-8 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Coupons</h1>
                <Button color='secondary' variant='contained' className='z-[0]' disableElevation>Add a Coupon</Button>
            </div>

            <div className='flex shadow-lg flex-col rounded-lg space-y-2'>
                <div className='flex border-b-4 item-center  justify-between p-2 rounded-lg'>
                    <div className='w-[50%] space-x-2 items-center flex'>
                        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" size='large'>
                            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                            <Button
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                                <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup variant="contained" color='primary' size='large'>
                            <Button>
                                <ArrowDownwardIcon />
                            </Button>
                            <Button>
                                <ArrowUpwardIcon />
                            </Button>
                        </ButtonGroup>
                        <Popper
                            sx={{
                                zIndex: 1,
                            }}
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu" autoFocusItem>
                                                {options.map((option, index) => (
                                                    <MenuItem
                                                        key={option}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='p-2 flex flex-wrap items-center justify-between space-y-2'>
                    {
                        coupons.map(coupon => {
                            return (
                                <CouponsCard coupon={coupon} />
                            )
                        })
                    }

                </div>

                <div className='p-2 flex justify-end border-t-4'>
                    <Stack spacing={2} className=''>
                        <Pagination count={(coupons.length + 4) / 5} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default Coupons