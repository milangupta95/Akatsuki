import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { useState,useEffect } from 'react';
import { api } from '../utility/api';
import {CircularProgress} from '@mui/material';
export default function CouponForCustomer({handleClose,customer_id}) {
    const [coupons, setCoupons] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    console.log(customer_id);
    useEffect(() => {
        (async function getData() {
            setLoading(true);
            try {
                let res = await api.get(`/coupon/${customer_id}/`);
                if (res) {
                    if (res.status === 200) {
                        setCoupons(res.data);
                    } else {
                        setError("There Might Be Some Error");
                    }
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })()
    }, []);
    return (

        loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div> : <Paper sx={{ width: '100%'}}>
            <TableContainer sx={{ maxHeight: 440 }}>
            <Table sx={{ maxWidth: 700 }} stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Coupon Code</TableCell>
                        <TableCell align="center">Purchase Required</TableCell>
                        <TableCell align="center">Discount</TableCell>
                        <TableCell align="center">Expiry</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coupons.map((row) => (
                        <TableRow key={row.coupon_code}>
                            <TableCell component="th" scope="row">
                                {row.coupon_code}
                            </TableCell>
                            <TableCell align="center">{row.min_purchase_val}</TableCell>
                            <TableCell align="center">{row.coupon_amount}</TableCell>
                            <TableCell align="center">{row.expiry_date.split("T")[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Paper>

            );
}
