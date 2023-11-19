import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useState,useEffect } from 'react';
import { api } from '../utility/api';
import { CircularProgress } from '@mui/material';

function generateDataWithMonth(data) {
    let arr = [];
    for(let i=0;i<data.length;i++) {
        switch(i) {
            case 0:
                arr.push({
                    month : "Jan",
                    purchase: data[i]
                })
                break;
            case 1:
                arr.push({
                    month : "Feb",
                    purchase: data[i]
                })
                break;
            case 2:
                arr.push({
                    month : "Mar",
                    purchase: data[i]
                })
                break;
            case 3:
                arr.push({
                    month : "Apr",
                    purchase: data[i]
                })
                break;
            case 4:
                arr.push({
                    month : "May",
                    purchase: data[i]
                })
                break;
            case 5:
                arr.push({
                    month : "Jun",
                    purchase: data[i]
                })
                break;
            case 6:
                arr.push({
                    month : "Jul",
                    purchase: data[i]
                })
                break;
            case 7:
                arr.push({
                    month : "Aug",
                    purchase: data[i]
                })
                break;
            case 8:
                arr.push({
                    month : "Sep",
                    purchase: data[i]
                })
                break;
            case 9:
                arr.push({
                    month : "Oct",
                    purchase: data[i]
                })
                break;
            case 10:
                arr.push({
                    month : "Nov",
                    purchase: data[i]
                })
                break;
            case 11:
                arr.push({
                    month : "Dec",
                    purchase: data[i]
                })
                break;
        }
    }
    return arr;
}
function MonthlyPurchaseGraph({customer_id,year}) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    console.log(customer_id);
    useEffect(() => {
        (async function getData() {
            setLoading(true);
            try {
                let res = await api.get(`/purchase/year/${customer_id}?year=${year}`);
                if (res) {
                    console.log(res);
                    if (res.status === 200) {
                        let monthlyData = generateDataWithMonth(res.data);
                        setData(monthlyData);
                    } else {
                        setError("There Might Be Some Error");
                    }
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })()
    }, [year]);
    return (
        loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div> :<ResponsiveBar
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