import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Store() {
  const [alignment, setAlignment] = useState('daily');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className='p-2 space-y-20'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Concentration of Each Zone</h1>
          <p className='text-sm text-gray-400'>Based on Top Perfoming products in store</p>
        </div>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          size='small'
        >
          <ToggleButton value="daily">Daily</ToggleButton>
          <ToggleButton value="weekly">Monthly</ToggleButton>
          <ToggleButton value="monthly">Weekly</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className='flex justify-between space-x-4'>
        <div className='w-[24%]'>
          <h1 className='text-lg font-bold border-b-2 border-dotted'>Zones</h1>
          <ul className='mt-6 space-y-2'>
            <li className='flex justify-between'>
              <p className='text-lg'>Zone-1</p>
              <p className='text-lg font-bold'>75%</p>
            </li>
            <li className='flex justify-between'>
              <p className='text-lg'>Zone-2</p>
              <p className='text-lg font-bold'>05%</p>
            </li>
            <li className='flex justify-between'>
              <p className='text-lg'>Zone-3</p>
              <p className='text-lg font-bold'>20%</p>
            </li>
          </ul>
        </div>
        <div className='w-[75%]'>
          <img src='/zoneconc.png' className='rounded-lg shadow-sm shadow-gray-400'/>
        </div>
      </div>
    </div>
  )
}

export default Store