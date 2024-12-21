import { useEffect, useRef, useState } from 'react';
import canvasImg from './canvasImg';


function Canvas() {
    const [index, setIndex] = useState({ value: 0 });
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        img.src = canvasImg[index.value];
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }, [index]);

    return (
        <canvas ref={canvasRef}
            id="canvas"
            className='w-[18rem] h-[18rem]'
        ></canvas>
    )
}



export default Canvas;