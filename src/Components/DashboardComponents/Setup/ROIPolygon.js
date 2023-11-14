import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ROIPolygon = ({ imageUrl, lines, setLines,setUndoHistory,setRedoHistory }) => {
    const canvasRef = useRef(null);

    const [currentLine, setCurrentLine] = useState(null);
    const handleMouseDown = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setCurrentLine({ start: { x: offsetX, y: offsetY }, end: { x: offsetX, y: offsetY } });
    };

    const handleMouseMove = (e) => {
        if (currentLine) {
            const { offsetX, offsetY } = e.nativeEvent;
            setCurrentLine((prevLine) => ({
                ...prevLine,
                end: { x: offsetX, y: offsetY },
            }));
        }
    };

    const handleMouseUp = () => {
        if (currentLine) {
            setLines((prevLines) => [...prevLines, currentLine]);
            setUndoHistory((prevHistory) => [...prevHistory, [...lines]]);
            setRedoHistory([]); // Clear redo history when a new action is performed
            setCurrentLine(null);
        }
    };

    const drawLines = () => {
        const canvas = canvasRef.current;

        // Check if canvasRef.current is not null or undefined
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            lines.forEach((line) => {
                ctx.beginPath();
                ctx.moveTo(line.start.x, line.start.y);
                ctx.lineTo(line.end.x, line.end.y);
                ctx.stroke();
            });

            // Draw the current line if it exists
            if (currentLine) {
                ctx.beginPath();
                ctx.moveTo(currentLine.start.x, currentLine.start.y);
                ctx.lineTo(currentLine.end.x, currentLine.end.y);
                ctx.stroke();
            }
        }
    };

    return (
        <Paper
            sx={{
                p: 3,
                position: 'relative',
                overflow: 'hidden',
                width: '600px',
                height: '600px',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '600',
                    height: '600',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <canvas
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseOut={handleMouseUp}
                    width="600" height="600"
                />
            </div>
            {drawLines()}
        </Paper>
    );
};

export default ROIPolygon;
