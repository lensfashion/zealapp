import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@/app/container';

const Hero = () => {
  return (
    <Container>
      <section>
        <Head>
          <meta property="og:title" content="Photography" key="title" />
        </Head>

        <div className="px-6 py-12 text-center md:px-6 lg:text-center">
          <div className="container px-12 mx-auto">
            <div className="grid flex justify-center items-center gap-0 lg:grid-cols-2">
              <div className="lg:mb-0">
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/pictozeal.jpg"
                    alt="logo"
                    width={300}
                    height={300}
                    className="rounded-full shadow-lg"
                  />
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <h1 className="mb-12 text-2xl font-bold md:text-6xl xl:text-7xl">
                  A new form of photography
                </h1>
                <p className="text-lg text-1xl">
                  Bringing your imagination to life!
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Hero;