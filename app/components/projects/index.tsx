import React from 'react';
import FlipCard from '../flipCard';
import Image from 'next/image';
import Container from '@/app/container';

const Card = () => (
  <div
    className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat 
    shadow-lg dark:shadow-black/20 bg-[50%] w-3/4 h-3/4"
    data-te-ripple-init data-te-ripple-color="dark">
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
      <div className="flex h-full items-start justify-start">
        <h5 className="m-6 text-lg font-bold text-white">
          Title
        </h5>
      </div>
    </div>
    <div className="w-full align-middle transition duration-300 ease-linear">
      <Image
        src="/after.png"
        alt="after"
        width={300}
        height={400} />
    </div>
    <a href="/superhero">
      <div>
        <div
          className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
);

const CardGrid = () => (
  <Container>
    <div className="grid gap-6 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </Container>

);

export default CardGrid;