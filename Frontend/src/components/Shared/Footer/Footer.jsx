import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 px-4 pt-16 pb-8 text-gray-300 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white">SmartAgroConnect</h3>
            <p className="mt-4">Your trusted partner in agriculture, from seed to market.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Connect Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-2xl hover:text-primary-green"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-primary-green"><FaYoutube /></a>
              <a href="#" className="text-2xl hover:text-primary-green"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p>© 2025 SmartAgroConnect  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
