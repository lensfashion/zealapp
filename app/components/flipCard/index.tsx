"use client"

import React, { useState } from 'react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTouchStart = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective" onClick={handleClick}>
      <div className={`relative preserver-3d ${!isFlipped? "group-hover:rotate-y-180" : 'rotate-y-180'} w-full h-full duration-1000`}>
        <div className="absolute backface-hidden w-full h-full">
        <img
          alt=""        
          src="/after.png"
          className='w-full h-full'
        />
        </div>
        <div className={`absolute rotate-y-180 ${!isFlipped? '': 'rotate-y-180'}  backface-hidden w-full h-full`}>
        <img
          alt=""        
          src="/before.jpg"
          className='w-full h-full'
        />
        </div>
      </div>
      </div>
    </div>
  );
}

export default FlipCard;