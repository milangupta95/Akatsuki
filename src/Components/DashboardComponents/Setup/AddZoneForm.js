import { TextField, InputLabel, MenuItem, Select, FormControl, Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Stack, Chip } from '@mui/material';

function AddZoneForm(props) {
    const [zones, setZones] = useState([]);
    const [currentZoneName, setcurrentZoneName] = useState("");
    const [cameraip, setcameraip] = useState("");
    const [zoneType, setZoneType] = useState("product");
    const [zoneImage, setzoneImage] = useState(null);

    const handleAddZone = () => {
        
    }


    const addnewZone = () => {
        const newZone = [
            ...zones,
            {
                id: zones.length,
                name: currentZoneName,
                zoneImage: zoneImage
            }
        ]
        setZones(newZone);
        setcurrentZoneName("");
        setzoneImage(null);
    }



    const handleChipDelete = (dataTobeDeleted) => {
        const newZone = zones.filter(zone => zone.id !== dataTobeDeleted.id);
        setZones(newZone);
    }

    const handleClose = props.handleClose;
    return (
        <div className='w-[80%] p-4 shadow-sm rounded-lg shadow-gray-500 space-y-4 z-[100] bg-white top-[20%] left-[60%] absolute'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-xl font-bold text-violet-800'>Add Camera Form</h1>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>

            <div>
                <label className='w-[100%] text-lg font-bold'>Add Zones</label>
                <div className='w-full flex justify-between items-center'>
                    <TextField
                        height='medium'
                        placeholder='Zone Name'
                        value={currentZoneName}
                        onChange={(e) => setcurrentZoneName(e.target.value)}>

                    </TextField>

                    <Button
                        variant="outlined"
                        className='h-[50px]'
                        component="label"
                    >
                        Upload Zone Image
                        <input
                            type="file"
                            hidden
                            accept='.jpg,.png,.jpeg'
                            onChange={(e) => setzoneImage(e.target.files[0])}
                        />
                    </Button>
                    <Button variant='contained' className='w-[3%]' onClick={addnewZone}>
                        <AddIcon />
                    </Button>
                </div>
            </div>
            <Stack direction="row" spacing={1}>
                {zones.length === 0 ? <div>No Zones!!! Add some</div> :
                    zones.map((zone) => {
                        return (<Chip label={zone.name} id={zone.id} color='primary' onDelete={() => handleChipDelete(zone)}/>)
                    })}
            </Stack>
            <div className='w-full flex justify-between items-center'>
                <label className='w-[39%] text-lg font-bold'>Camera IP</label>
                <TextField
                    className='w-[59%]'
                    placeholder='Camera IP'
                    value={cameraip}
                    onChange={(e) => setcameraip(e.target.value)}></TextField>
            </div>
            <div className='w-full flex justify-between items-center'>
                <label className='w-[39%] text-lg font-bold'>Camera Type</label>
                <Select
                    value={zoneType}
                    onChange={(e) => setZoneType(e.target.value)}
                    className='w-[59%]'
                >
                    <MenuItem value={"product"}>Product</MenuItem>
                    <MenuItem value={"entrance"}>Entrance</MenuItem>
                </Select>
            </div>
            <div className='w-full flex justify-between items-center'>

                <Button
                    variant='contained'
                    disableElevation
                    size='large'
                    className='w-[100%] h-[50px]'
                    onClick={handleAddZone}
                >
                    Add Camera
                </Button>
            </div>
        </div>
    )
}

export default AddZoneForm