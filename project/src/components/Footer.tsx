import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C2D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-3">
                          <img
                            src="/assets/logo.png"
                            alt="Astrology with Rajat Logo"
                            className="h-20 w-auto object-contain filter invert -mt-4" 
                          />
              </Link>
            </div>
            <p className="text-white leading-relaxed">
              Guiding you through life's journey with ancient wisdom and modern understanding. 
              Over 25 years of experience in Vedic astrology and spiritual guidance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-red-400 hover:text-red-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-white hover:text-yellow-400 transition-colors">About Pandit Ji</Link>
              <Link to="/services" className="block text-white hover:text-yellow-400 transition-colors">Our Services</Link>
              <Link to="/book" className="block text-white hover:text-yellow-400 transition-colors">Book Appointment</Link>
              <Link to="/blog" className="block text-white hover:text-yellow-400 transition-colors">Articles & Blog</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Services</h3>
            <div className="space-y-2">
              <p className="text-white">Kundli Making & Matching</p>
              <p className="text-white">Vastu Consultation</p>
              <p className="text-white">Palmistry Reading</p>
              <p className="text-white">Numerology Analysis</p>
              <p className="text-white">Gemstone Consultation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-white">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-white">info@panditji.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-white">123 Temple Street, Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 Pandit Ji Astrology. All rights reserved. | Made with ❤️ for spiritual guidance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;