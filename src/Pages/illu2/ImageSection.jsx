import React, { useState, useRef, useEffect } from 'react';

const InteractiveCanvas = () => {
  const [partName, setPartName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  const parts = [
    { name: 'Left Wing', region: { x: 10, y: 50, width: 100, height: 150 } },
    { name: 'Right Wing', region: { x: 300, y: 50, width: 100, height: 150 } },
    { name: 'Body', region: { x: 120, y: 80, width: 170, height: 100 } },
    { name: 'Tail', region: { x: 150, y: 190, width: 80, height: 70 } }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgRef.current;

    img.onload = () => {
      setIsLoading(false);
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.onerror = () => {
      setError('Failed to load image');
      setIsLoading(false);
    };

    img.src = '../../assets/login/login3.jpg';

    const handleCanvasClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const scaledX = x * scaleX;
      const scaledY = y * scaleY;

      const clickedPart = parts.find(part => {
        const r = part.region;
        return scaledX >= r.x && scaledX <= r.x + r.width &&
               scaledY >= r.y && scaledY <= r.y + r.height;
      });

      if (clickedPart) {
        highlightPart(clickedPart);
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      img.onload = null;
      img.onerror = null;
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  const highlightPart = (part) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Redraw the base image
    ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);

    // Draw highlight
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.strokeRect(
      part.region.x,
      part.region.y,
      part.region.width,
      part.region.height
    );

    setPartName(part.name);
  };

  const containerStyle = {
    marginTop:'100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  };

  const canvasStyle = {
    border: '1px solid black',
    maxWidth: '100%'
  };

  const labelStyle = {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#666'
  };

  const errorStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'red'
  };

  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative' }}>
        {isLoading && (
          <div style={loadingStyle}>Loading...</div>
        )}
        {error && (
          <div style={errorStyle}>{error}</div>
        )}
        <canvas
          ref={canvasRef}
          style={canvasStyle}
        />
      </div>
      <div style={labelStyle}>
        {partName ? `Part: ${partName}` : 'Click on a part to see its name.'}
      </div>
    </div>
  );
};

export default InteractiveCanvas;