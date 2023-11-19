import React, { useState } from 'react'
import GeneralSetup from './GeneralSetup'
import CameraSetup from './CameraSetup'
import ROISetup from './ROISetup'
import { Chrono } from "react-chrono";
import MultiStepProgressBar from '../utility/MultiStepProgressBar/MultiStepProgressBar';

function Setup() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      default:
        setPage("1");
    }
  };
  return (
    <div className='p-2 space-y-8'>
      <div
        style={{
          width: '100%',
          height: '100px',
        }}
        className='flex justify-center'
      >
        <div className='w-[100%]'>
          <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
          {
            {
              pageone: <GeneralSetup onButtonClick={nextPage} nextPage={nextPage} setPage={setPage}/>,
              pagetwo: <CameraSetup onButtonClick={nextPage} />,
              pagethree: <ROISetup onButtonClick={nextPage} />,
            }[page]
          }
        </div>
      </div>
    </div>
  )
}

export default Setup