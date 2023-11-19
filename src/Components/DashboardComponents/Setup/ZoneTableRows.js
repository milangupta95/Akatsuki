import React from 'react'
import { TableRow, TableCell, IconButton, TextField } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button, ButtonGroup,Select,MenuItem } from '@mui/material'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

function ZoneTableRows({ row, zones, setZones,s_no }) {
    const [editMode, setEditMode] = useState(false);
    const [zone, setZone] = useState(row);

    const deleteZone = () => {

    }

    const saveChanges = () => {
        setEditMode(false);
    }

    const closeEditMode = () => {
        setZone(row);
        setEditMode(false);
    }
    return (
        !editMode ? <TableRow
            key={row.s_no}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="zone">
                {s_no}
            </TableCell>
            <TableCell align="center">{zone.zone_name}</TableCell>
            <TableCell align="center">{zone.camera_id}</TableCell>
            <TableCell align="center">{zone.camera_type}</TableCell>
            <TableCell align="center">
                <IconButton>
                    <RemoveRedEyeIcon />
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <ButtonGroup size='small' variant="outlined" aria-label="outlined button group">
                    <Button color='secondary' onClick={() => setEditMode(true)}>
                        <EditIcon />
                    </Button>
                    <Button color='error' onClick={deleteZone}>
                        <DeleteIcon />
                    </Button>
                </ButtonGroup>
            </TableCell>
        </TableRow> :
            <TableRow
                key={zone.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" width={10}>
                    {zone.s_no}
                </TableCell>
                <TableCell align="center" width={550}>
                    <TextField size='small'
                        sx={{ padding: '0px', fontSize: '5px' }}
                        value={zone.zone_name}
                        onChange={(e) => {
                            setZone({
                                ...zone,
                                zone_name: e.target.value
                            })
                        }} />
                </TableCell>
                <TableCell align="center" width={550}><TextField size='small'
                    sx={{ padding: '0px', fontSize: '5px' }}
                    value={zone.camera_ip}
                    onChange={(e) => {
                        setZone({
                            ...zone,
                            camera_ip: e.target.value
                        })
                    }} /></TableCell>
                <TableCell align="center" width={300}>
                    <Select
                        value={zone.zone_type}
                        onChange={(e) => {
                            setZone({
                                ...zone,
                                zone_type: e.target.value
                            })
                        }}
                        size='small'
                    >
                        <MenuItem value={"product"}>Product</MenuItem>
                        <MenuItem value={"entrance"}>Entrance</MenuItem>
                    </Select>
                </TableCell>
                <TableCell align="center" width={20}>
                    <IconButton>
                        <RemoveRedEyeIcon />
                    </IconButton>
                </TableCell>
                <TableCell align="center" width={50}>
                    <ButtonGroup size='small' variant="outlined" aria-label="outlined button group">
                        <Button color='secondary' onClick={saveChanges}>
                            <SaveIcon />
                        </Button>
                        <Button color='error' onClick={closeEditMode}>
                            <CloseIcon />
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}

export default ZoneTableRows