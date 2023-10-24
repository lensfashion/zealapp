"use client"

import React from 'react';
import Image from 'next/image'

const ArrowCard = () => {
  return (
    <section>
      <h2 className="mb-16 text-3xl font-bold text-center">
        What do we do?
      </h2>
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between gap-10">
          <div>
            <h4 className="mb-16 text-xl text-center">
              Take your simple picture
            </h4>
            <div className="flex flex-col no-wrap gap-0">
              <Image
                src="/before.jpg"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              /> <Image
                src="/before.jpg"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />
              <Image
                src="/before.jpg"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />
            </div>

          </div>
          <div className="flex flex-row flex-1 w-full">
            <div className="h-2 bg-a-color w-10 mt-1 mb-1 bg-center"></div>
            <div className="h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-a-color"></div>
          </div>
          <div>
            <h4 className="mb-16 text-xl text-center">
              Make it into a masterpiece
            </h4>
            <Image
              src="/after.png"
              alt="after"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-between gap-10">
          <div>
            <h4 className="mb-16 text-xl text-center">
              Take your simple picture
            </h4>
            <Image
              src="/before.jpg"
              alt="logo"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-row flex-1 justify-between rotate-90">
            <div className="h-2 bg-a-color w-10 mt-1 mb-1 bg-center"></div>
            <div className="h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-a-color"></div>
          </div>
          <div>
            <h4 className="mb-16 text-xl text-center">
              Make it into a masterpiece
            </h4>
            <Image
              src="/after.png"
              alt="after"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArrowCard;