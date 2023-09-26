import React from 'react';
import Card from './card';

const Superhero = () => {
  return (
    <>
       <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center lg:text-left">
          <h2 class="mb-12 text-center text-3xl font-bold">
                Superhero!
          </h2>
          <div class="grid gap-x-6 lg:grid-cols-3">
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