import React from 'react';
import FlipCard from '../flipCard';

const cards = [
  <FlipCard />,
  <FlipCard />,
    <FlipCard />,
    <FlipCard />,
    <FlipCard />,
    <FlipCard />,
];


const Card = () => (
    <div
    className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
    data-te-ripple-init data-te-ripple-color="dark">
        <img src="./after.png"
          className="w-full align-middle transition duration-300 ease-linear" />
    <a href="/superhero">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">
           Title
          </h5>
        </div>
      </div>
      <div>
        <div
          className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
);

const CardGrid = () => ( 
    <div className="container my-12 mx-auto md:px-6">
        <section className="mb-32">
            <div className="grid gap-6 lg:grid-cols-3">
                {cards.map((card, index) => (
                <Card key={index} />
                ))}
            </div>
        </section> 
    </div>
    
);

export default CardGrid;