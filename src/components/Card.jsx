import React, { useState } from 'react';

const Card = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width +0.25) * 10; // Adjust intensity
    const y = ((e.clientY - card.top) / card.height - 2) * 10; // Adjust intensity
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 }); // Reset to initial position
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
      }}
    >
      <h2>Hover Me!</h2>
      <p>This card moves with your cursor.</p>
    </div>
  );
};

export default Card;
