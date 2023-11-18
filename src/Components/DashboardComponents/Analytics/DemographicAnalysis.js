import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import NormalBox from './NormalBox';


const data2 = [
    {
        "age-group": "0-10",
        "male": 0,
        "hot dogColor": "hsl(227, 70%, 50%)",
        "female": 5,
        "burgerColor": "hsl(247, 70%, 50%)",

    },
    {
        "age-group": "10-20",
        "male": 10,
        "hot dogColor": "hsl(227, 70%, 50%)",
        "female": 5,
        "burgerColor": "hsl(247, 70%, 50%)",

    },
    {
        "age-group": "20-30",
        "male": 20,
        "hot dogColor": "hsl(227, 70%, 50%)",
        "female": 10,
        "burgerColor": "hsl(247, 70%, 50%)",

    },
    {
        "age-group": "30-40",
        "male": 15,
        "hot dogColor": "hsl(227, 70%, 50%)",
        "female": 35,
        "burgerColor": "hsl(247, 70%, 50%)",
    },
]
function DemographicAnalysis() {
    return (
        <div className='w-full flex justify-between'>
            <div className='w-[31%] h-[535px] flex flex-col rounded-lg shadow-sm justify-center'>
                <div className='flex flex-col justify-center h-[70%] rounded-t-lg  p-2 bg-[#DEE1F1] space-y-8'>
                    <h1 className='text-xl text-center font-bold p-2'>Summary</h1>
                    <div className='flex w-[full] items-center justify-center space-x-8'>
                        <div className='w-[30%] text-center'>
                            <p className='text-2xl font-bold'>{279}</p>
                            <p className='text-lg font-bold text-[#5A67BA]'>{'Individual Engager'}</p>
                        </div>
                        <div className='w-[30%] text-center'>
                            <p className='text-2xl font-bold'>{379}</p>
                            <p className='text-lg font-bold text-[#5A67BA]'>{'Group Engager'}</p>
                        </div>
                    </div>
                    <div className='flex w-[full] items-center justify-center space-x-8'>
                        <div className='w-[30%] text-center'>
                            <p className='text-2xl font-bold'>{279}</p>
                            <p className='text-lg font-bold text-[#5A67BA]'>{'Individual Footfall'}</p>
                        </div>
                        <div className='w-[30%] text-center'>
                            <p className='text-2xl font-bold'>{379}</p>
                            <p className='text-lg font-bold text-[#5A67BA]'>{'Group Footfall'}</p>
                        </div>
                    </div>
                </div>
                <div className='flex shadow-lg mx-[auto] bg-[#5A67BA] w-full h-[30%] rounded-b-lg p-2 pt-10 justify-between'>
                    <div className='w-[30%] text-center'>
                        <p className='text-2xl font-bold'>{1179}</p>
                        <p className='text-sm font-bold text-white'>{'Total Footfall'}</p>
                    </div>
                    <div className='w-[30%] text-center'>
                        <p className='text-2xl font-bold'>{379}</p>
                        <p className='text-sm font-bold text-white'>{'Bounced Footfall'}</p>
                    </div>

                    <div className='w-[30%] text-center'>
                        <p className='text-2xl font-bold'>{279}</p>
                        <p className='text-sm font-bold text-white'>{'Missed Oppurtunities'}</p>
                    </div>
                    <div className='w-[30%] text-center'>
                        <p className='text-2xl font-bold'>{379}</p>
                        <p className='text-sm font-bold text-white'>{'Converted Footfalls'}</p>
                    </div>
                </div>
            </div>
            <div className='w-[68%] flex flex-col space-y-2'>
                <div className='w-full h-[400px] p-2 pb-6 shadow-sm shadow-gray-500 rounded-lg'>
                    <h1 className='font-bold text-xl'>Demographic Analysis</h1>
                    <ResponsiveBar
                        data={data2}
                        keys={[
                            'male',
                            'female'
                        ]}
                        indexBy="age-group"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'age',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Conversion Rate',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                    />
                </div>
                <div className='flex flex-wrap justify-between [&>*]:mr-2 last:mr-0'>
                    <NormalBox row={{
                        name: "Male Footfall",
                        value: 200,
                        baseval: 1179
                    }} />
                    <NormalBox row={{
                        name: "Male Engagers",
                        value: 180,
                        baseval: 1179
                    }} />
                    <NormalBox row={{
                        name: "Female Footfall",
                        value: 200,
                        baseval: 1179
                    }} />
                    <NormalBox row={{
                        name: "Female Engagers",
                        value: 200,
                        baseval: 1179
                    }} />
                </div>
            </div>

        </div>
    )
}

export default DemographicAnalysis