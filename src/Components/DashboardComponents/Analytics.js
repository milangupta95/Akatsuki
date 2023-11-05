import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DemographicAnalysis from './DemographicAnalysis';
import OverallAnalysis from './OverallAnalysis';

function Analytics() {
    const [alignment, setAlignment] = useState("overall");
    const [analyticsType, setAnalyticsType] = useState("Today");

    
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
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Time Period</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={analyticsType}
                            label="Time Period"
                            onChange={(e) => setAnalyticsType(e.target.value)}
                        >
                            <MenuItem value={"Monthly"}>Monthly</MenuItem>
                            <MenuItem value={"Weekly"}>Weekly</MenuItem>
                            <MenuItem value={"Yearly"}>Yearly</MenuItem>
                            <MenuItem value={"Today"}>Today</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            {alignment === "overall" ?
            <OverallAnalysis/> 
             : <DemographicAnalysis/>
            }
        </div>
    )
}

export default Analytics