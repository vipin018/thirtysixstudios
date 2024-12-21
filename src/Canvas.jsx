import { useEffect, useRef, useState } from 'react';
import canvasImg from './canvasImg'; // Ensure this path is correct

function Canvas({ index }) {
    const canvasRef = useRef(null);
    const [imgIndex, setImgIndex] = useState({ value: index });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        canvas.width = img.innerWidth;
        canvas.height = img.innerHeight;
        img.src = canvasImg[imgIndex.value];
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }, [imgIndex]);

    return (
        <canvas ref={canvasRef} id="canvas" className='w-[18rem] h-[18rem]'></canvas>
    );
}

export default Canvas;