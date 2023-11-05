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
import { SvgIcon } from '@mui/material';
import RegistrationPage from './RegistrationPage';
import Box from '@mui/material/Box';

const rows = [
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    }, {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    },
    {
        name: "Milan Kumar Gupta",
        mobile: "9140076991",
        email: "milangupta95@gmail.com",
        address: "Jankipuram",
        feedback: "Here is Feed"
    }
]

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                <div className='font-bold text-2xl'>Customers</div>
                <div>
                    <Button variant='contained' onClick={handleOpen} color='secondary'>Add Customer</Button>
                </div>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 640 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className='bg-black'>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell align="right">Mobile Number</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Coins</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <CustomerTableRow row={{
                                        name: "Milan Kumar Gupta",
                                        mobile: "9140076991",
                                        email: "milangupta95@gmail.com",
                                        address: "Jankipuram",
                                        feedback: "Here is Feed"
                                    }} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <RegistrationPage handleClose = {handleClose}/>
                </Box>

            </Modal>
        </div>
    );
}