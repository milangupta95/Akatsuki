import React from 'react'
import GeneralSetup from './GeneralSetup'
import CameraSetup from './CameraSetup'
import ROISetup from './ROISetup'

function Setup() {
  return (
    <div className='p-2 space-y-8'>
      <div className='justify-between flex'>
        <GeneralSetup></GeneralSetup>
        <CameraSetup></CameraSetup>
      </div>
      <h1 className='text-2xl text-center font-bold text-violet-800'>Region of Intrest Selection</h1>
      <ROISetup/>
    </div>
  )
}

export default Setup