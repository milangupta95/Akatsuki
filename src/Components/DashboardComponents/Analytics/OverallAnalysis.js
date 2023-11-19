import React from 'react'
import { ResponsiveFunnel } from '@nivo/funnel'
import AnalyticsBox from './AnalyticsBox';

const data = [
    {
        "id": "foot_fall",
        "value": 2000,
        "label": "Footfall"
    },
    {
        "id": "engaged",
        "value": 1500,
        "label": "Engagers"
    },
    {
        "id": "grpup_count",
        "value": 1300,
        "label": "Group Count"
    },
    {
        "id": "converted",
        "value": 500,
        "label": "Conversion"
    },
]

function OverallAnalysis() {
    return (
        <div className='flex items-center flex-col justify-center space-y-8'>
            <div className='h-[500px] w-[95%] p-4 shadow-sm '>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-bold'>Conversion Analysis</h1>
                    <div className='w-[50%] flex justify-center items-center space-x-8'>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[16px] h-[16px] bg-[#6E4D82]'></div>
                            <p>Footfall</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[16px] h-[16px] bg-[#8969AD]'></div>
                            <p>Engagers</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[16px] h-[16px] bg-[#A69EC6]'></div>
                            <p>Group Count</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[16px] h-[16px] bg-[#C9C4DF]'></div>
                            <p>Conversion</p>
                        </div>
                    </div>
                </div>

                <ResponsiveFunnel
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    valueFormat=">-.4s"
                    direction='horizontal'
                    colors={{ scheme: 'purple_orange' }}
                    fillOpacity={0.7}
                    borderWidth={5}
                    borderColor={{ from: 'color', modifiers: [] }}
                    borderOpacity={1}
                    labelColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                '3'
                            ]
                        ]
                    }}
                    beforeSeparatorLength={50}
                    afterSeparatorLength={50}
                    currentBorderWidth={0}
                    motionConfig="wobbly"
                />
            </div>
            <div className='w-[95%] items-center justify-between flex flex-wrap'>
                <AnalyticsBox values={{
                    name: "Footfall",
                    actualValue: 1179,
                    valueNeeded: 1179
                }}></AnalyticsBox>
                <AnalyticsBox values={{
                    name: "Bounced Customer",
                    actualValue: 90,
                    valueNeeded: 1179
                }}></AnalyticsBox>
                <AnalyticsBox values={{
                    name: "Engagers",
                    actualValue: 1064,
                    valueNeeded: 1179
                }}></AnalyticsBox>
                <AnalyticsBox values={{
                    name: "Billable Entities",
                    actualValue: 1027,
                    valueNeeded: 1179
                }}></AnalyticsBox>
                <AnalyticsBox values={{
                    name: "Missed Oppurtunities",
                    actualValue: 563,
                    valueNeeded: 1179
                }}></AnalyticsBox>
                <AnalyticsBox values={{
                    name: "Conversion Rate",
                    actualValue: 552,
                    valueNeeded: 1179
                }}></AnalyticsBox>
            </div>

        </div>
    )
}

export default OverallAnalysis