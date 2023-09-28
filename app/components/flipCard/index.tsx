"use client"

import React, { useState } from 'react';
import Image from 'next/image'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective" onClick={handleClick}>
      <div className={`relative preserver-3d ${!isFlipped? "group-hover:rotate-y-180" : 'rotate-y-180'} w-full h-full duration-1000`}>
        <div className="absolute backface-hidden w-full h-full">
        <Image
          alt=""        
          src="/after.png"   
          width={300}
          height={400}       
        />
        </div>
        <div className={`absolute rotate-y-180 ${!isFlipped? '': 'rotate-y-180'}  backface-hidden w-full h-full`}>
        <Image
          alt=""        
          src="/before.jpg"
          width={300}
          height={400}   
          loading='lazy'  
        />
        </div>
      </div>
      </div>
    </div>
  );
}

export default FlipCard;