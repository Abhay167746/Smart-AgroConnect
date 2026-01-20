
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// ✅ Import farmer photos from assets
import rakeshImg from "../../assets/rakesh.jpg";
import priyaImg from "../../assets/priya.jpg";
import amitImg from "../../assets/amit.jpg";

const testimonials = [
  {
    quote:
      "The market price updates are incredibly fast and accurate. It helped me get a much better deal for my paddy this season.",
    name: "Rakesh Singh",
    location: "Rudrapur, Uttarakhand",
    image: rakeshImg,
  },
  {
    quote:
      "I ordered seeds and fertilizers through the marketplace. The quality was excellent and delivery was on time. Highly recommended.",
    name: "Priya Sharma",
    location: "Kashipur, Uttarakhand",
    image: priyaImg,
  },
  {
    quote:
      "The learning hub articles on pest control saved my wheat crop. Simple, effective advice that actually works for our local conditions.",
    name: "Amit Kumar",
    location: "Haldwani, Uttarakhand",
    image: amitImg,
  },
];

const TestimonialCard = ({ quote, name, location, image }) => (
  <div className="rounded-lg border-l-4 border-primary-green bg-white p-8 shadow-lg flex flex-col items-center text-center min-w-[320px] mx-4">
    <img
      src={image}
      alt={name}
      className="h-16 w-16 rounded-full object-cover mb-4 border-2 border-primary-green"
    />
    <p className="italic text-dark-text">"{quote}"</p>
    <div className="mt-4 font-bold text-dark-green">{name}</div>
    <div className="text-sm text-gray-500">{location}</div>
  </div>
);

const Testimonials = () => {
  const controls = useAnimation();
  const [settings, setSettings] = useState({
    distance: "-50%",
    duration: 15,
  });

  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 640) {
        setSettings({ distance: "-30%", duration: 20 });
      } else if (window.innerWidth < 1024) {
        setSettings({ distance: "-40%", duration: 18 });
      } else {
        setSettings({ distance: "-50%", duration: 15 });
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  // start animation
  useEffect(() => {
    controls.start({
      x: ["0%", settings.distance, "0%"],
      transition: {
        repeat: Infinity,
        duration: settings.duration,
        ease: "easeInOut",
      },
    });
  }, [settings, controls]);

  return (
    <section className="bg-light-bg py-16 px-4 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-dark-green">
          Trusted by Farmers Like You
        </h2>

        {/* Back-and-forth animation with pause on hover */}
        <motion.div
          className="flex mt-12 cursor-pointer"
          animate={controls}
          onMouseEnter={() => controls.stop()} // pause
          onMouseLeave={() =>
            controls.start({
              x: ["0%", settings.distance, "0%"],
              transition: {
                repeat: Infinity,
                duration: settings.duration,
                ease: "easeInOut",
              },
            })
          } // resume
        >
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
