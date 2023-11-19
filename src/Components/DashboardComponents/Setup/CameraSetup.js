import { Button,CircularProgress,Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ZonesTable from './ZonesTable'
import AddZoneForm from './AddZoneForm'
import { api } from '../utility/api';

function CameraSetup() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cameras,setCameras] = useState();
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState();

  useEffect(() => {
    (async function loadData() {
      setLoading(true);
      try {
        let res = await api.get("/setup/cameras/");
        if(res) {
          if(res.status === 200) {
            setCameras(res.data);
          } else {
            setError("There Might Be Some Error");
          }
          setLoading(false);
        }
      }catch(err) {
        setLoading(false);
        setError(err.message);
      }
      
    })();
  },[])
  return (
    loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div> :<div className='p-2 shadow-md rounded-lg w-full space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold text-violet-800'>Setup Zones</h1>
        <Button
          size='large'
          disableElevation
          variant='contained'
          onClick={handleOpen}
        >Add Camera</Button>
      </div>
      
      <ZonesTable cameras = {cameras} setCameras = {setCameras}/>
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