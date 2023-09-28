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
          <h5 className="mb-4 text-lg font-bold">
            Stunning High-Quality Imagery
          </h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Experience the magic of high-resolution photos showcasing exquisite
            dresses like never before.Plus, enjoy access to a diverse
            collection, perfect for boosting your sales.
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <h5 className="mb-4 text-lg font-bold">Efficiency at Its Best</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            We value your time. Our streamlined process ensures quick photo
            sessions, with the ability to capture precious moments
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <h5 className="mb-4 text-lg font-bold">Personalized Selections</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Your creativity knows no bounds! You can take the reins and select
            the dress and setting of your choice. Whether its a fairy-tale theme
            or a rustic backdrop, your vision becomes reality with our
            user-friendly intake form
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <h5 className="mb-4 text-lg font-bold">No Dress-Up Required</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Capture Precious Moments Hassle-Free Enjoy the shoot without the
            need for dressing up.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
