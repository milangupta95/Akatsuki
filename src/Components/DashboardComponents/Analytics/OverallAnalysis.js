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
                <h1 className='text-2xl font-bold'>Conversion Analysis</h1>
                <ResponsiveFunnel
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    valueFormat=">-.4s"
                    colors={{ scheme: 'spectral' }}
                    borderWidth={20}
                    labelColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                3
                            ]
                        ]
                    }}
                    direction='horizontal'
                    beforeSeparatorLength={100}
                    beforeSeparatorOffset={20}
                    afterSeparatorLength={100}
                    afterSeparatorOffset={20}
                    currentPartSizeExtension={10}
                    currentBorderWidth={40}
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