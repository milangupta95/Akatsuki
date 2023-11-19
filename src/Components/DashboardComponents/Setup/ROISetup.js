import React, { useState } from 'react'
import ROIPolygon from './ROIPolygon'
import { Button, Select, MenuItem, ButtonGroup, CircularProgress } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { api } from '../utility/api';
import { useEffect } from 'react';
function ROISetup() {
  const [lines, setLines] = useState([]);
  const [currentIdx, setcurrentIdx] = useState(0);
  const [undoHistory, setUndoHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const [cameras, setCameras] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async function loadData() {
      setLoading(true);
      try {
        let res = await api.get("/setup/cameras/");
        if (res) {
          if (res.status === 200) {
            setCameras(res.data);
          } else {
            setError("There Might Be Some Error");
          }
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }

    })();
  }, [])
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
    loading ? <CircularProgress></CircularProgress> : error ? <div>{error}</div> : <div className='flex justify-center'>
      <div>
        <div className='p-4 w-[600px] flex item-center justify-between shadow-md'>
          <div>
            <Select
              value={currentIdx}
              onChange={(e) => setcurrentIdx(e.target.value)}
            >
              {
                cameras.map((camera, idx) => {
                  return <MenuItem value={idx}>{camera.zone_name}</MenuItem>
                })
              }
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
          setRedoHistory={setRedoHistory} redoHistory={redoHistory} setLines={setLines} imageUrl={cameras[currentIdx].zone_image} />
      </div>
    </div>
  )
}

export default ROISetup