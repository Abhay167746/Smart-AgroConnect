// src/components/Homepage/Testimonials.jsx
import React from 'react';

const TestimonialCard = ({ quote, name, location }) => (
  <div className="rounded-lg border-l-4 border-primary-green bg-white p-8 shadow-lg">
    <p className="italic text-dark-text">"{quote}"</p>
    <div className="mt-4 font-bold text-dark-green">{name}</div>
    <div className="text-sm text-gray-500">{location}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-light-bg py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-dark-green">Trusted by Farmers Like You</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard 
            quote="The market price updates are incredibly fast and accurate. It helped me get a much better deal for my paddy this season."
            name="Rakesh Singh"
            location="Rudrapur, Uttarakhand"
          />
          <TestimonialCard 
            quote="I ordered seeds and fertilizers through the marketplace. The quality was excellent and delivery was on time. Highly recommended."
            name="Priya Sharma"
            location="Kashipur, Uttarakhand"
          />
          <TestimonialCard 
            quote="The learning hub articles on pest control saved my wheat crop. Simple, effective advice that actually works for our local conditions."
            name="Amit Kumar"
            location="Haldwani, Uttarakhand"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;