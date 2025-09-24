// src/components/Homepage/ProductCategories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import seedsImg from '../../assets/seeds.jpg';
import fertilizerImg from '../../assets/fertilizer.jpeg';
import machineryImg from '../../assets/machinery.png';
import protectionImg from '../../assets/protection.jpg';

const CategoryCard = ({ image, title }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={image} alt={title} className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute inset-0 flex items-end p-4">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <Link to="/marketplace" className="absolute inset-0" aria-label={title} />
  </div>
);

const ProductCategories = () => {
  const categories = [
    { title: 'High-Yield Seeds', image: seedsImg },
    { title: 'Fertilizers', image: fertilizerImg },
    { title: 'Farm Machinery', image: machineryImg },
    { title: 'Crop Protection', image: protectionImg },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-dark-green">Explore Our Range of Products</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;