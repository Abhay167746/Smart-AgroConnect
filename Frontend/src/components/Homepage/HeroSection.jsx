import React from 'react';
import { Link } from 'react-router-dom';
import farmBackground from '../../assets/background.jpg';


const HeroSection = () => {
  return (
    <section
      className="flex h-[calc(100vh-80px)] min-h-[600px] items-center justify-center bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${farmBackground})` }}
    >
      <div className="max-w-4xl px-4 bg-black/40 rounded-lg py-10">
        <h1 className="text-4xl font-bold drop-shadow-md md:text-6xl">
          Empowering Your Harvest. Simplifying Your Business.
        </h1>
        <p className="mt-4 text-lg drop-shadow-md md:text-xl">
          Your one-stop platform for supplies, real-time data, and expert insights.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/marketplace"
            className="rounded-md bg-primary-green px-8 py-3 font-semibold text-white transition hover:bg-opacity-90"
          >
            Shop Products
          </Link>
          <Link
            to="/list-produce"
            className="rounded-md border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-dark-green"
          >
            Sell Your Produce
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
