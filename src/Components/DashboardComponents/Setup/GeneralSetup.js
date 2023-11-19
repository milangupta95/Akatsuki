import React, { useEffect } from 'react'
import { TextField, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ImageIcon from '@mui/icons-material/Image';
import { api } from '../utility/api';

function GeneralSetup({setPage,nextPage}) {
  const [shop, setShop] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadSetup() {
      setLoading(true);
      try {
        let shopRes = await api.get("/setup");
        if (shopRes) {
          if (shopRes.status === 200) {
            setShop(shopRes.data);
            console.log(shop);
          } else {
            window.alert("There Might Be Some Error");
          }
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        window.alert("There Might be Some error");
      }

    })();
  }, []);
  // const [shopName, setshopName] = useState(shop.shop_name);
  // const [shopManagerName, setShopManagerName] = useState(shop.shop_manager_name);
  // const [email, setEmail] = useState(shop.coorporate_email);
  // const [phone, setPhone] = useState(shop.phone_number);
  // const [address, setAddress] = useState(shop.address);
  // const [imageUrl, setImageUrl] = useState(shop.brand_logo);
  // const [description, setDescription] = useState(shop.description);
  const handleSave = async () => {
    try {
      let res = await api.post("/setup", {
        "shop_name": shop.shop_name,
        "shop_manager_name": shop.shop_manager_name,
        "coorporate_email": shop.coorporate_email,
        "phone_number": shop.phone_number,
        "address": shop.address,
        "brand_logo": shop.brand_logo,
        "description": shop.description,
        "camera_zones": [],
      });

      if(res) {
        if(res.status === 200) {
          setPage("pagetwo");
          nextPage();
        } else {
          window.alert("There Might Be Some Error");
        }
      }
    } catch (err) {
      window.alert(err.message);
    }
  }
  return (
    <div className='p-4 shadow-md rounded-lg space-y-8 flex item-center flex-col w-[100%]'>
      <h1 className='text-xl font-bold text-violet-800'>General Setup of Shop</h1>
      {loading ? <CircularProgress></CircularProgress> :
        <form className='space-y-4'>
          <div className='flex justify-between items-center space-x-8'>
            <label for="shop_name" className='text-lg w-[40%] font-bold'>Shop Name</label>
            <TextField
              value={shop.shop_name}
              name='shop_name'
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  shop_name: e.target.value
                }
              })}
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
              name='shop_manager_name'
              value={shop.shop_manager_name}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  shop_manager_name: e.target.value
                }
              })}
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
              name='coorporate_email'
              value={shop.coorporate_email}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  coorporate_email: e.target.value
                }
              })}
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
              name='phone_number'
              value={shop.phone_number}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  phone_number: e.target.value
                }
              })}
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
              name='address'
              value={shop.address}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  address: e.target.value
                }
              })}
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
            <label for="address" className='text-lg w-[40%] font-bold'>Description</label>
            <TextField
              multiline
              rows={3}
              value={shop.description}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  description: e.target.value
                }
              })}
              variant='outlined'
              className='w-[60%]'
              placeholder='Description'
              required={true}
            ></TextField>
          </div>

          <div className='flex justify-between items-center space-x-8'>
            {/* <Button
            variant="outlined"
            className='h-[50px]'
            component="label"
          >
            Upload Brand Logo
            <input
              name='brand_logo'
              type="file"
              hidden
              accept='.jpg,.png,.jpeg'
              onChange={(e) => setBrandlogo(e.target.files[0])}
            />
          </Button> */}
            <TextField variant='outlined'
              value={shop.brand_logo}
              onChange={(e) => setShop((shop) => {
                return {
                  ...shop,
                  brand_logo: e.target.value
                }
              })}
              placeholder='Image Url or file source'
              className='w-[40%]'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ImageIcon style={{ color: 'purple' }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type='submit'
              variant='contained'
              disableElevation
              size='large'
              className='w-[58%] h-[60px]'
              onClick={handleSave}
            >
              Save Info
            </Button>
          </div>
        </form>
      }

    </div>
  )
}

export default GeneralSetup