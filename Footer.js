import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-100 text-gray-300 py-10 w-full relative z-50 mt-20 border border-red-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          {/* Logo & About */}
          <div className="space-y-4 font">
            <h2 className="text-2xl font-bold text-black flex items-center space-x-2">
               <span>Ashdip Bistro</span>
            </h2>
            <p className="text-sm text-black">
              Experience the best flavors with our delicious meals made from fresh ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Find Us</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-black">Home</a></li>
              <li><a href="#" className="text-black">About Us</a></li>
              <li><a href="#" className="text-black">Menu</a></li>
              <li><a href="#" className="text-black">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="space-y-4 text-black">
            <h3 className="text-lg font-semibold text-black">Contact Us</h3>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-black" />
              <span>123 Bistro Street,Pune.</span>
            </p>
            <p className="flex items-center space-x-2 text-black">
              <FaPhone className="text-black" />
              <span>+91 8263549084</span>
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-black hover:text-white text-xl"><FaFacebookF /></a>
              <a href="#" className="text-black hover:text-white text-xl"><FaInstagram /></a>
              <a href="#" className="text-black hover:text-white text-xl"><FaTwitter /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 text-center border-t border-black pt-6 font-serif text-b">
          <p className="text-sm text-black">&copy; 2025 Ashdip Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

