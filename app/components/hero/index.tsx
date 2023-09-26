import React from 'react';
import Head from 'next/head';

const Hero = () => {
  return (
    <>
       <section>
    <div className="mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        A new form of photography
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Bringing your imagination to life!
        </p>
        
      </div>
      </section>
    </>
  );
}

export default Hero;