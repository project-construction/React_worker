import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  position: relative;
`;

const Canvas = styled.canvas`
  border: 1px solid #ccc;
`;

function SignatureCanvas() {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDrawing(true);
        const pos = getMousePos(canvasRef.current, e);
        setLastPos(pos);
    };

    const handleMouseUp = () => {
        setDrawing(false);
    };


    const getMousePos = (canvasDom, mouseEvent) => {
        const rect = canvasDom.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top,
        };
    };

    const handleMouseMove = (e) => {
        setMousePos(getMousePos(canvasRef.current, e));
        renderCanvas(); // renderCanvas 함수를 호출하여 선 그리기
    };

    const renderCanvas = () => {
        if (drawing) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#222222';
            ctx.lineWidth = 4;
            ctx.beginPath(); // 선을 그릴 때마다 새로운 시작점을 지정해야 함
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            setLastPos(mousePos);
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.width;
        sigTextRef.current.innerHTML = 'Data URL for your signature will go here!';
        sigImageRef.current.setAttribute('src', '');
    };

    const sigTextRef = useRef(null);
    const sigImageRef = useRef(null);

    const handleSave = async () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL();

        try {
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/swagger-ui/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ signatureDataUrl: dataUrl }),
            });

            if (response.ok) {
                console.log('Signature image saved on the server');
            } else {
                console.error('Failed to save signature image on the server');
            }
        } catch (error) {
            console.error('Error while saving signature image:', error);
        }

        sigTextRef.current.innerHTML = dataUrl;
        sigImageRef.current.setAttribute('src', dataUrl);
    };
    return (
        <div>
            <CanvasWrapper>
                <Canvas
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                />
            </CanvasWrapper>
            <button onClick={clearCanvas}>Clear</button>
            <button onClick={handleSave}>Save</button>
            <div>
                <div ref={sigTextRef}>
                    Data URL for your signature will go here!
                </div>
                <img
                    ref={sigImageRef}
                    alt="Signature"
                    style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
                />
            </div>
        </div>
    );
}

export default SignatureCanvas;
