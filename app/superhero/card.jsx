import React from 'react';
import FlipCard from '../components/flipCard';

const Card = () => {
  return (
              <div class="mb-12 lg:mb-0">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                  <FlipCard />
                </div>
                <h5 class="mb-4 text-lg font-bold">Superhero Model1</h5>
            </div>
  );
}

export default Card;