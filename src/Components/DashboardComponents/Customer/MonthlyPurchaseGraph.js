import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

function MonthlyPurchaseGraph() {
    const data = [
        {
            month : "Jan",
            purchase : 100
        },
        {
            month : "Feb",
            purchase : 1000
        },
        {
            month : "Mar",
            purchase : 0
        },
        {
            month : "Apr",
            purchase : 0
        },
        {
            month : "May",
            purchase : 0
        },
        {
            month : "Jun",
            purchase : 1200
        },
        {
            month : "Jul",
            purchase : 0
        },
        {
            month : "Aug",
            purchase : 0
        },
        {
            month : "Sept",
            purchase : 0
        },
        {
            month : "Oct",
            purchase : 0
        },
        {
            month : "Nov",
            purchase : 0
        },
        {
            month : "Dec",
            purchase : 0
        },
    ]
    return (
        <ResponsiveBar
            data={data}
            keys={[
                'purchase',
            ]}
            indexBy="month"
            margin={{ top: 30, right: 10, bottom: 100, left: 60 }}
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
                legend: 'month',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'purchase',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            role="application"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />

    )
}

export default MonthlyPurchaseGraph