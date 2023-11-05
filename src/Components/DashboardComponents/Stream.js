import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Stream() {
    const [camera, setCamera] = useState("camera-1");
    const [filter, setFilter] = useState("heatmap");
    return (
        <div className='p-4 space-y-4'>
            <div className='flex items-center justify-between'>
                <div className='space-x-4 flex w-[50%]'>
                    <FormControl fullWidth>
                        <InputLabel>Camera</InputLabel>
                        <Select
                            value={camera}
                            label="Camera"
                            onChange={(e) => setCamera(e.target.value)}
                        >
                            <MenuItem value={"camera-1"}>Camera-1</MenuItem>
                            <MenuItem value={"camera-2"}>Camera-2</MenuItem>
                            <MenuItem value={"camera-3"}>Camera-3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Filter</InputLabel>
                        <Select
                            value={filter}
                            label="Filter"
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <MenuItem value={"heatmap"}>Store Heatmap</MenuItem>
                            <MenuItem value={"customer"}>Customer Demographics</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            {
                filter === "heatmap" ? <iframe src="https://drive.google.com/file/d/1sI8tbj9oumsFUtTNY6xkv0iFOfDRbArJ/preview" width="1140" height="500" allow="autoplay">
                </iframe> : <iframe src="https://drive.google.com/file/d/1WFvt31spDdRHoTSCCgaPbzIf42CEOp7F/preview" width="1140" height="500" allow="autoplay"></iframe>
            }
        </div>
    )
}

export default Stream