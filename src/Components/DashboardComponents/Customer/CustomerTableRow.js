import React, { useState } from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Box, Button, ButtonGroup, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomerUpdateForm from './CutomerUpdateForm';
import { Modal } from '@mui/material'
import SendMessageForm from './SendMessageForm';
import CouponForCustomer from '../Coupons/CouponForCustomer';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'
import { api } from '../utility/api';
import { Snackbar, Alert } from '@mui/material'

function CustomerTableRow(props) {
    let row = props.row;
    const customers = props.customers;
    const setCustomers = props.setCustomers;
    const [customer, setCustomer] = useState(row);
    const [updateModalopen, setupdateModalOpen] = useState(false);
    const [messageModalopen, setMessageModalOpen] = useState(false);
    const [couponModalOpen, setCouponModalOpen] = useState(false);
    const handleupdateModalClose = () => { setupdateModalOpen(false) }
    const handleupdateModalOpen = () => { setupdateModalOpen(true) }
    const handlemessageModalClose = () => { setMessageModalOpen(false) }
    const handlemessageModalOpen = () => { setMessageModalOpen(true) }
    const handleCouponModalOpen = () => { setCouponModalOpen(true) }
    const handleCouponModalClose = () => { setCouponModalOpen(false) }
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
    const [showNotification, setShowNotification] = React.useState(false);
    const handleDelete = async () => {
        try {
            const res = await api.delete(`customer/${customer.customer_id}`);
            if (res) {
                if (res.status === 200) {
                    let filteredCustomers = customers.filter((cust) => cust.customer_id != customer.customer_id);
                    setCustomers(filteredCustomers);
                    setMessage("Data deleted Successfully");
                    setMessageType("success");
                    setShowNotification(true);
                } else {
                    setMessage("There is Some Error");
                    setMessageType("error");
                    setShowNotification(true);
                }
            }
        } catch (err) {
            setMessage(err.message);
            setMessageType("error");
            setShowNotification(true);
        }
        // let filteredCustomers = customers.filter((cust) => {
        //     console.log(cust.id + " " + customer.id);
        //     return cust.id !== customer.id;
        // });
        // console.log(customer);
        // console.log(filteredCustomers);
        // setCustomers(filteredCustomers);
    }

    return (
        <TableRow key={customer.num}>
            <TableCell component="th" scope="row" className='flex items-center justify-between'>
                <Link to={`/dashboard/customer?id=${customer.customer_id}`}><p className='cursor-pointer text-sky-600'>{customer.first_name + " " + customer.last_name}</p></Link>
            </TableCell>
            <TableCell align="center">{customer.phone_number}</TableCell>
            <TableCell align="center">{customer.email}</TableCell>
            <TableCell align="center">{customer.address}</TableCell>
            <TableCell align="center">{customer.total_bill_amount}</TableCell>
            <TableCell align="center">
                <ButtonGroup variant="outlined" size='small'>
                    <Button color='secondary' onClick={handleupdateModalOpen}>
                        <EditIcon />
                    </Button>
                    <Button color='error' onClick={handleDelete}>
                        <DeleteIcon />
                    </Button>
                    <Button onClick={handlemessageModalOpen}>
                        Send Message
                    </Button>
                    <Button onClick={() => setCouponModalOpen(true)}>
                        Customer Coupons
                    </Button>
                </ButtonGroup>

            </TableCell>

            <Modal
                open={updateModalopen}
                onClose={handleupdateModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <CustomerUpdateForm customer={customer} setCustomer={setCustomer} handleClose={handleupdateModalClose} />
                </Box>

            </Modal>

            <Modal
                open={couponModalOpen}
                onClose={handleCouponModalClose}
            >
                <Box>
                    <div className='flex h-[100vh] justify-center w-[100vw] p-2 items-center'>
                        <div className='shadow-sm md:w-[50%] w-[50%] sm:w-[50%] rounded-r-lg h-[100%] flex items-center mx-auto'>
                            <div className='z-[100] w-full space-y-2 flex-end rounded-lg p-4 bg-white'>
                                <div className='flex item-center justify-between w-[full]'>
                                    <h1 className='text-xl font-bold text-purple-800'>Coupons</h1>
                                    <IconButton onClick={handleCouponModalClose}>
                                        <CloseIcon></CloseIcon>
                                    </IconButton>
                                </div>
                                <CouponForCustomer customer_id={customer.customer_id} handleClose={handleCouponModalClose} />
                            </div>
                        </div>
                    </div>
                </Box>

            </Modal>

            <Modal
                open={messageModalopen}
                onClose={handlemessageModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <SendMessageForm customer={customer} handleClose={handlemessageModalClose} />
                </Box>

            </Modal>

            <Snackbar open={showNotification} autoHideDuration={6000} onClose={() => setShowNotification(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setShowNotification(false)} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </TableRow>
    )
}

export default CustomerTableRow