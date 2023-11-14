import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton,ButtonGroup,Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ZoneTableRows from './ZoneTableRows';
const rows = [
    {
        "s_no": 1,
        "zone_name": "SkinCare",
        "camera_ip": "192.168.0.1",
        "zone_type": "entrance"
    }
]

export default function ZonesTable() {
    const [zones,setZones] = useState(rows)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650,maxHeight:200 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: 20 }}>S.No.</TableCell>
                        <TableCell align="center" sx={{ width: 150 }}>Zone Name</TableCell>
                        <TableCell align="center" sx={{ width: 200 }}>Camera IP</TableCell>
                        <TableCell align="center" sx={{ width: 200 }}>Zone Type</TableCell>
                        <TableCell align="center" sx={{ width: 150 }}>Image</TableCell>
                        <TableCell align="center" sx={{ width: 200 }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {zones.map((row) => (
                        <ZoneTableRows row = {row} zones={zones} setZones={setZones}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}