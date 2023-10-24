import React from "react";
import Container from "../container";

const Features = () => {
  return (
    <Container>
      <h2 className="mb-16 text-3xl font-bold text-center">
        What sets us apart?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <div className="flex justify-left">
            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" className="check-icon" data-astro-cid-j7pv25f6="">
              <path d="M3 9.72308L11.1385 17.8615L26 3" stroke="var(--accent)" stroke-width="5.66154" data-astro-cid-j7pv25f6="">
              </path>
            </svg>
            <p className="mb-4 text-lg font-bold">
              An Abundance of High-Quality Photos
            </p>
          </div>
          <p className="text-neutral-500">
            Experience the magic of high-resolution photos showcasing exquisite
            outfits like never before. We offer an extensive array of captivating photos that 
            will exceed your expectations, igniting higher sales opportunities
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="flex justify-left">
            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" className="check-icon" data-astro-cid-j7pv25f6="">
              <path d="M3 9.72308L11.1385 17.8615L26 3" stroke="var(--accent)" stroke-width="5.66154" data-astro-cid-j7pv25f6="">
              </path>
            </svg>
            <p className="mb-4 text-lg font-bold">Efficiency at Its Best</p>
          </div>
          <p className="text-neutral-500">
            We value your time. Our streamlined process ensures quick photo
            sessions, with the ability to capture precious moments
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="flex justify-left">
            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" className="check-icon" data-astro-cid-j7pv25f6="">
              <path d="M3 9.72308L11.1385 17.8615L26 3" stroke="var(--accent)" stroke-width="5.66154" data-astro-cid-j7pv25f6="">
              </path>
            </svg>
            <p className="mb-4 text-lg font-bold">Personalized Selections</p>
          </div>
          <p className="text-neutral-500">
            Your creativity knows no bounds! You can take the reins and select
            the dress and setting of your choice. Whether its a fairy-tale theme
            or a rustic backdrop, your vision becomes reality with our
            user-friendly intake form
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="flex justify-left">
            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" className="check-icon" data-astro-cid-j7pv25f6="">
              <path d="M3 9.72308L11.1385 17.8615L26 3" stroke="var(--accent)" stroke-width="5.66154" data-astro-cid-j7pv25f6="">
              </path>
            </svg>
            <p className="mb-4 text-lg font-bold">No Dress-Up Required</p>
          </div>
          <p className="text-neutral-500">
            Capture Precious Moments Hassle-Free Enjoy the shoot without the
            need for dressing up.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
