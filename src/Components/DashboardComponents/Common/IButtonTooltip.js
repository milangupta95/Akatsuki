import React from 'react'
import { IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
function IButtonTooltip(props) {
    const message = props.message;

    return (
        <Tooltip title={message}>
            <IconButton>
                <InfoIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default IButtonTooltip