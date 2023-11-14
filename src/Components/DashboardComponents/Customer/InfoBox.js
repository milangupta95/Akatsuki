import React from 'react'

function InfoBox(props) {
    const valueType = props.valueType;
    const value = props.value;
  return (
    <div className='space-x-8 flex w-[30%]'>
        <p className='text-gray-400'>{valueType}</p>
        <p className='font-bold'>{value}</p>
    </div>
  )
}

export default InfoBox