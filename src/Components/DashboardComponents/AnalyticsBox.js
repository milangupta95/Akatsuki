import React from 'react'
import { BorderLinearProgress } from './BorderLinearProgress';




function AnalyticsBox(props) {
    const values = props.values;
    const percentage = ((values.actualValue / values.valueNeeded) * 100).toFixed(2);
    return (
        <div className='flex relative flex-col p-2 h-[200px] w-[350px] rounded-lg shadow-[inset_-12px_-8px_40px_#46464620] mt-4 items-stretch '>
            <div className='text-2xl'>
                <h1 className='text-4xl'>{values.actualValue}</h1>
                <p className='text-sm text-sky-500 font-bold'>{values.name}</p>
            </div>
            <div className='absolute inset-x-0 py-2 px-2 bottom-0'>
                <p><span className='font-bold text-sky-500'>{percentage}% </span>of footfall</p>
                <BorderLinearProgress variant="determinate" value={percentage} />
            </div>
        </div>
    )
}

export default AnalyticsBox