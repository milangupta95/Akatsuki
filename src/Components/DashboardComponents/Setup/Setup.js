import React, { useState } from 'react'
import GeneralSetup from './GeneralSetup'
import CameraSetup from './CameraSetup'
import ROISetup from './ROISetup'
import { Chrono } from "react-chrono";

function Setup() {
  const [index, setIndex] = useState(1);
  const items = [{
    title: "General Setup",
    cardTitle: "General Setup",
    url: "http://www.history.com",
    cardSubtitle: "General Setup of the shop",
    cardDetailedText: "Provide General Info Such as Brand Logo,Brand Name etc",
  },
  {
    title: "Zone Setup",
    cardTitle: "Zone Setup",
    url: "http://www.history.com",
    cardSubtitle: "General Setup of the shop",
    cardDetailedText: "Provide General Info Such as Brand Logo,Brand Name etc",
  },
  {
    title: "ROI Setup",
    cardTitle: "ROI Setup",
    url: "http://www.history.com",
    cardSubtitle: "General Setup of the shop",
    cardDetailedText: "Provide General Info Such as Brand Logo,Brand Name etc",
  }];
  return (
    <div className='p-2 space-y-8'>
      <div
        style={{
          width: '100%',
          height: '100px',
        }}
        className='flex justify-center'
      >
        <div className='w-[50%]'>
          <Chrono items={items} activeItemIndex={index} onItemSelected={(ind) => {
            setIndex(ind.index);
            console.log(ind.index);
          }} />
        </div>

      </div>
      <div className='justify-center flex w-full'>
        {
          index === 0 ? <GeneralSetup></GeneralSetup> :
            index === 1 ? <CameraSetup></CameraSetup> :
              <ROISetup />
        }
      </div>
    </div>
  )
}

export default Setup