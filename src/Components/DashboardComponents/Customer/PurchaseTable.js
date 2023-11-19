import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { api } from '../utility/api';
import { CircularProgress } from '@mui/material';



export default function PurchaseTable({ handleClose, customer_id }) {
    const [purchases, setPurchases] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    console.log(customer_id);
    useEffect(() => {
        (async function getData() {
            setLoading(true);
            try {
                let res = await api.get(`/purchase/${customer_id}/`);
                if (res) {
                    if (res.status === 200) {
                        setPurchases(res.data);
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
        loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div> : <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ maxWidth: 700 }} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Purchase Value</TableCell>
                            <TableCell align="right">Purchase Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchases.map((purchase, idx) => (
                            <TableRow key={idx}>
                                <TableCell component="th" scope="row">
                                    {idx + 1}
                                </TableCell>
                                <TableCell align="right">{purchase.product_price}</TableCell>
                                <TableCell align="right">{purchase.created_at.split("T")[0]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}
