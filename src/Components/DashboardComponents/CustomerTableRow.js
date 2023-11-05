import React from 'react'
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function CustomerTableRow(props) {
    let row = props.row;
    return (
        <TableRow key={row.num}>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.mobile}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{10}</TableCell>
            <TableCell align="right">
                <IconButton color='secondary'>
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <TableCell align="right">
                <IconButton color='error'>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            <TableCell align="right">
                <button className='p-2 text-white font-bold bg-purple-800 hover:bg-purple-900 rounded-lg h-[50px]'>
                    Send Message
                </button>
            </TableCell>
        </TableRow>
    )
}

export default CustomerTableRow