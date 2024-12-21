import { useEffect, useRef } from 'react';
import canvasImg from './canvasImg';
function Canvas() {
    useEffect(() => {
        const canvasRef = useRef(null);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const img = new Image();
        img.src = canvasImg;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

    });
    return (
        <canvas ref={canvasRef} id="canvas" >
        </canvas>
    )
}

export default Canvas;