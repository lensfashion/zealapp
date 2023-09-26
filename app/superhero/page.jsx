import React from 'react';
import Card from './card';

const Superhero = () => {
  return (
    <>
       <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold">
                Superhero!
          </h2>
          <div className="grid gap-x-6 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </>
  );
}

export default Superhero;