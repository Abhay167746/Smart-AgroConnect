


import React from 'react';
import { FaMapMarkerAlt, FaWeightHanging, FaTag } from 'react-icons/fa';

const ProduceCard = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(item.price);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="h-48 w-full">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-dark-green">{item.name}</h3>
        <p className="text-sm text-gray-600">Listed by {item.farmer}</p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-primary-green" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaWeightHanging className="mr-2 text-primary-green" />
            <span>{item.quantity} Quintals available</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaTag className="mr-2 text-primary-green" />
            <span className="font-semibold">{formattedPrice} / Quintal</span>
          </div>
        </div>
        <button className="mt-4 w-full rounded-md bg-primary-green py-2 font-semibold text-white transition hover:bg-dark-green">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProduceCard;
  