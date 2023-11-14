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
            
            <div className='w-[29%] flex flex-col rounded-lg shadow-lg justify-center'>
            <h1 className='text-xl font-bold p-2'>Summary</h1>
                <div className='flex flex-col h-[50%]  p-2 bg-blue-200 w-[full] [&>*]:mr-2 last:mr-0 [&>*]:mb-8'>
                    <div className='flex w-[full] items-center justify-between'>
                        <div className='w-[50%]'>
                            <p className='text-xl'>{179}</p>
                            <p className='text-sm font-bold text-sky-500'>{'Individual Engagers'}</p>
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-xl'>{279}</p>
                            <p className='text-sm font-bold text-sky-500'>{'Group Engagers'}</p>
                        </div>
                    </div>
                    <div className='flex w-[full] items-center justify-between'>
                        <div className='w-[50%]'>
                            <p className='text-xl'>{279}</p>
                            <p className='text-sm font-bold text-sky-500'>{'Individual Footfall'}</p>
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-xl'>{379}</p>
                            <p className='text-sm font-bold text-sky-500'>{'Group Footfall'}</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 shadow-lg space-y-2 mx-[auto] bg-white w-[95%] mt-[-100px] rounded-lg h-[50%] z-[1000] flex flex-col'>
                    <div className='flex flex-col mx-[auto] w-[full]'>
                        <div className='text-sky-300 text-xl font-semibold'>Total Footfall</div>
                        <div className='text-xl text-center'>1179</div>
                    </div>

                    <div className='flex flex-col mx-[auto] w-[full]'>
                        <div className='text-sky-300 text-xl font-semibold'>Bounced Footfall</div>
                        <div className='text-xl text-center'>379</div>
                    </div>

                    <div className='flex flex-col mx-[auto] w-[full]'>
                        <div className='text-sky-300 text-xl font-semibold'>Missed Oppurtunities</div>
                        <div className='text-xl text-center'>300</div>
                    </div>

                    <div className='flex flex-col mx-[auto] w-[full]'>
                        <div className='text-sky-300 text-xl font-semibold'>Conversion</div>
                        <div className='text-xl text-center'>500</div>
                    </div>
                </div>
            </div>
            <div className='w-[70%] flex flex-col'>
                <div className='flex flex-wrap justify-center [&>*]:mr-2 last:mr-0'>
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
                <div className='w-full h-[400px] p-2 pb-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
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
            </div>

        </div>
    )
}

export default DemographicAnalysis