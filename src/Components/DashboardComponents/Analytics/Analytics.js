import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import 'react-dates/initialize'; // This is required to initialize the library
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import DemographicAnalysis from './DemographicAnalysis';
import OverallAnalysis from './OverallAnalysis';

function Analytics() {
    const [alignment, setAlignment] = useState("overall");
    const [analyticsType, setAnalyticsType] = useState("Today");
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
    });
    const [focusedInput, setFocusedInput] = useState(null);

    const handleDateChange = ({ startDate, endDate }) => {
        setDateRange({ startDate, endDate });
    };
    return (
        <div className='p-2 space-y-8'>
            <div className='item-center justify-between flex'>
                <div className='flex items-center'>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        aria-label="Platform"
                        size='medium'
                    >
                        <ToggleButton value="overall" onClick={() => setAlignment("overall")}>Overall conversion Analytics</ToggleButton>
                        <ToggleButton value="demographics" onClick={() => setAlignment("demographics")}>Demographic Analysis</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div>
                    <DateRangePicker
                        startDate={dateRange.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={dateRange.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={handleDateChange}
                        focusedInput={focusedInput}
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                    />
                </div>
            </div>
            {alignment === "overall" ?
                <OverallAnalysis />
                : <DemographicAnalysis />
            }
        </div>
    )
}

export default Analytics