import React from 'react'
import { BorderLinearProgress } from './BorderLinearProgress';
function NormalBox(props) {
  let row = props.row;
  let percentage = ((row.value / row.baseval) * 100).toFixed(2);
  return (
    <div className='w-[189px] relative p-2 mb-4 space-y-4 rounded-xl h-[130px] shadow-sm shadow-gray-300'>
      <div>
        <p className='text-2xl'>{row.value}</p>
        <p className='text-md font-bold text-sky-500'>{row.name}</p>
      </div>

      <div className='absolute inset-x-0 py-2 px-2 bottom-0'>
        <p><span className='font-bold text-sky-500'>{percentage}% </span>of total footfall</p>
        <BorderLinearProgress variant="determinate" value={percentage} />
      </div>
    </div>
  )
}

export default NormalBox