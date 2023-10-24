import React from 'react';
import Image from 'next/image';
import Container from '@/app/container';
import ImageCard from '../imageCard';

const Card = () => (
  <div
    className="zoom relative overflow-hidden bg-s-color bg-no-repeat bg-[50%] rounded-lg "
    data-te-ripple-init data-te-ripple-color="dark">

    <div className="w-full flex justify-center align-middle transition duration-300 ease-linear">
      <Image
        src="/after.png"
        alt="after"
        width={200}
        height={300}
        className='rounded-lg bg-[hsla(0,0%,0%,0.3)]' />
    </div>
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
      <div className="flex h-full items-start justify-start">
        <h5 className="m-6 text-lg font-bold">
          Title
        </h5>
      </div>
    </div>
    <a href="/superhero">
      <div>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden 
          opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        </div>
      </div>
    </a>
  </div>
);

const CardGrid = () => (
  <Container>

    <h2 className="mb-16 text-3xl font-bold text-center">
      Checks out our Projects
    </h2>
    <div className="grid gap-6 lg:grid-cols-4 flex justify-center">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  </Container>

);

export default CardGrid;