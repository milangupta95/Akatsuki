import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

function StoreVisitGraph(props) {
    let data = props.data;
    return (
        <ResponsiveCalendar
        data={data}
        from="2023-01-01"
        to="2023-12-31"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        monthSpacing={1}
        monthBorderColor="#ffffff"
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    )
}

export default StoreVisitGraph