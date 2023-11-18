import { Button,Modal } from '@mui/material'
import React, { useState } from 'react'
import ZonesTable from './ZonesTable'
import AddZoneForm from './AddZoneForm'

function CameraSetup() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='p-2 shadow-md rounded-lg w-full space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold text-violet-800'>Setup Zones</h1>
        <Button
          size='large'
          disableElevation
          variant='contained'
          onClick={handleOpen}
        >Add Camera</Button>
      </div>
      
      <ZonesTable />
      <Modal
        open={open}
        onClose={handleClose}
        className='w-[50%]'
      >
        <AddZoneForm handleClose={handleClose} />
      </Modal>
    </div>
  )
}

export default CameraSetup