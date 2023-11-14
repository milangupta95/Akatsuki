import React from 'react'
import { TextField,Button } from '@mui/material';
import { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

function GeneralSetup() {
  const [shopName, setshopName] = useState("");
  const [shopManagerName, setShopManagerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [brandlogo,setBrandlogo] = useState(null);

  const handleSave = () => {
    console.log(brandlogo);
  }
  return (
    <div className='p-4 shadow-md rounded-lg space-y-8 flex item-center flex-col w-[50%]'>
      <h1 className='text-xl font-bold text-violet-800'>General Setup of Shop</h1>
      <form className='space-y-4'>
        <div className='flex justify-between items-center space-x-8'>
          <label for="shop_name" className='text-lg w-[40%] font-bold'>Shop Name</label>
          <TextField
            value={shopName}
            onChange={(e) => setshopName(e.target.value)}
            variant='outlined'
            className='w-[60%]'
            placeholder='Shop Name'
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StorefrontIcon style={{ color: 'purple' }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>

        <div className='flex justify-between items-center space-x-8'>
          <label for="shop_manager_name" className='text-lg w-[40%] font-bold'>Shop Manager Name</label>
          <TextField
            value={shopManagerName}
            onChange={(e) => setShopManagerName(e.target.value)}
            variant='outlined'
            className='w-[60%]'
            placeholder='Shop Manager Name'
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: 'purple' }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>

        <div className='flex justify-between items-center space-x-8'>
          <label for="email" className='text-lg w-[40%] font-bold'>Coorporate Email</label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
            className='w-[60%]'
            placeholder='Coorporate Email'
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: 'purple' }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>

        <div className='flex justify-between items-center space-x-8'>
          <label for="phone_number" className='text-lg w-[40%] font-bold'>Phone Number</label>
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant='outlined'
            className='w-[60%]'
            placeholder='Phone Number'
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone style={{ color: 'purple' }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>

        <div className='flex justify-between items-center space-x-8'>
          <label for="address" className='text-lg w-[40%] font-bold'>Address</label>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            variant='outlined'
            className='w-[60%]'
            placeholder='Address'
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MapsHomeWorkIcon style={{ color: 'purple' }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>

        <div className='flex justify-between items-center space-x-8'>
          <Button
            variant="outlined"
            className='h-[50px]'
            component="label"
          >
            Upload Brand Logo
            <input
              type="file"
              hidden
              accept='.jpg,.png,.jpeg'
              onChange={(e) => setBrandlogo(e.target.files[0])}
            />
          </Button>
          <Button
          variant='contained'
          disableElevation
          size='large'
          className='w-[50%] h-[50px]'
          onClick={handleSave}
          >
            Save Info
          </Button>
        </div>
      </form>
    </div>
  )
}

export default GeneralSetup