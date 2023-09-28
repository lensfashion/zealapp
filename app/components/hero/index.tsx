import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
  <section className="background-radial-gradient">  
  <Head>
    <meta property="og:title" content="Photography" key="title" />
  </Head> 

    <div className="px-12 py-12 text-center md:px-12 lg:text-center">
      <div className="container px-32 mx-auto">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
              A new form of photography
            </h1>
            <p className="text-lg text-[hsl(218,81%,95%)]">
              Bringing your imagination to life!
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="w-full rounded-lg shadow-lg flex justify-center items-center">
              <Image
                src="/pictozeal.jpg"
                alt="logo"
                width={300}
                height={300}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
  </>
  );
}

export default Hero;