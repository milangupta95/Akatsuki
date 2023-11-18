import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomerTableRow from './CustomerTableRow';
import { Button, Modal } from '@mui/material';
import RegistrationPage from './RegistrationPage';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import IButtonTooltip from '../Common/IButtonTooltip';
import { api } from '../utility/api';
import {CircularProgress} from '@mui/material'

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [customers, setCustomers] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await api.get("/customer");
                if (res) {
                    if (res.status === 200) {
                        setCustomers(res.data);
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
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='p-2'>
            <div className='h-50px flex p-2 item-center justify-between'>
                <div className='font-bold text-2xl flex space-x-2 items-center'>
                    <p>Customers</p>
                    <IButtonTooltip message={"List Of The Customers"} />
                </div>
                <div>
                    <Button variant='contained' onClick={handleOpen} color='secondary'>Add Customer</Button>
                </div>
            </div>
            {loading ? <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box> : error ? <div>There Might Be Some error {error.message}</div> : customers.length === 0 ? <div className='text-lg font-bold text-red-600'>No Customer Found!!! Plaese add customers</div> : <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 640 }}>
                    <Table stickyHeader>
                        <TableHead sx={{ fontWeight: 'bold' }}>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell align="center">Mobile Number</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Total Purchase</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <CustomerTableRow row={row} setCustomers={setCustomers} customers={customers} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={customers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <RegistrationPage handleClose={handleClose} customers={customers} setCustomers={setCustomers} />
                </Box>

            </Modal>
        </div>
    );
}