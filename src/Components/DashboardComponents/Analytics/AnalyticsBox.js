import React from 'react'
import { BorderLinearProgress } from './BorderLinearProgress';
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import RadialSeparators from './RadialSeperators';
function AnalyticsBox(props) {
    const values = props.values;
    const percentage = ((values.actualValue / values.valueNeeded) * 100).toFixed(1);
    return (
        <div className='flex p-6 h-[150px] w-[300px] justify-between items-center rounded-2xl shadow-md shadow-gray-200 mt-4'>
            <div className='text-2xl flex flex-col items-center justify-center h-[100%]'>
                <h1 className='text-4xl font-bold text-left'>{values.actualValue}</h1>
                <p className='text-sm text-gray-600 text-left font-bold'>{values.name}</p>
            </div>
            <div className='w-[100px]'>
                <CircularProgressbarWithChildren
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={12}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: "#1B59F8",
                        textColor: "#1B59F8"
                    })}
                >
                    <RadialSeparators
                        count={5}
                        style={{
                            background: "#fff",
                            width: "2px",
                            // This needs to be equal to props.strokeWidth
                            height: `${10}%`
                        }}
                    />
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default AnalyticsBox