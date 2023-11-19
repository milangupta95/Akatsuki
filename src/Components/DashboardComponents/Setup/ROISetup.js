import React, { useState } from 'react'
import ROIPolygon from './ROIPolygon'
import { Button, Select, MenuItem, ButtonGroup } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

function ROISetup() {
  const [lines, setLines] = useState([]);
  const [zone, setZone] = useState("zone-1");
  const [undoHistory, setUndoHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  const undo = () => {
    if (undoHistory.length > 0) {
      const previousLines = undoHistory.pop();
      setRedoHistory((prevHistory) => [...prevHistory, [...lines]]);
      setLines(previousLines);
    }
  };

  const redo = () => {
    if (redoHistory.length > 0) {
      const nextLines = redoHistory.pop();
      setUndoHistory((prevHistory) => [...prevHistory, [...lines]]);
      setLines(nextLines);
    }
  };

  const generateLinePoints = () => {
    const linePointsString = JSON.stringify(lines, null, 2);
    window.alert(`Line Points:\n${linePointsString}`);
  };

  const clearLines = () => {
    setLines([]);
  };
  return (
    <div className='flex justify-center'>
      <div>
        <div className='p-4 w-[600px] flex item-center justify-between shadow-md'>
          <div>
            <Select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <MenuItem value={"zone-1"}>Zone-1</MenuItem>
              <MenuItem value={"zone-2"}>Zone-2</MenuItem>
              <MenuItem value={"zone-3"}>Zone-3</MenuItem>
              <MenuItem value={"zone-4"}>Zone-4</MenuItem>
            </Select>
          </div>
          <div className='flex items-center'>
            <Button variant="contained" onClick={generateLinePoints} sx={{ mr: 2 }}>
              Generate Line Points
            </Button>
            <ButtonGroup variant='outlined'>
              <Button onClick={clearLines}>
                <RefreshIcon />
              </Button>
              <Button onClick={undo} disabled={undoHistory.length === 0}>
                <UndoIcon />
              </Button>
              <Button onClick={redo} disabled={redoHistory.length === 0}>
                <RedoIcon />
              </Button>
            </ButtonGroup>
          </div>

        </div>
        <ROIPolygon lines={lines} undoHistory={undoHistory} setUndoHistory={setUndoHistory}
          setRedoHistory={setRedoHistory} redoHistory={redoHistory} setLines={setLines} imageUrl={`https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D`} />
      </div>
    </div>
  )
}

export default ROISetup