import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  useEffect(() => {
    toast('क्या आप प्यार में पागल हो चुके हैं');
  }, []);
  
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Text */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/logo.png"
              alt="Astrology with Rajat Logo"
              className="h-20 w-auto object-contain -mt-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { path: '/', label: t('header.home') },
              { path: '/about', label: t('header.about') },
              { path: '/services', label: t('header.services') },
              { path: '/book', label: t('header.book') },
              { path: '/contact', label: t('header.contact') }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-black font-medium ${
                  isActive(path) ? 'text-orange-800 border-b-2 border-orange-800' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 rounded-lg mt-2 mb-4 shadow-lg">
            <nav className="flex flex-col py-4 space-y-2 px-4">
              {[
                { path: '/', label: t('header.home') },
                { path: '/about', label: t('header.about') },
                { path: '/services', label: t('header.services') },
                { path: '/book', label: t('header.book') },
                { path: '/blog', label: t('header.blog') },
                { path: '/contact', label: t('header.contact') }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:bg-red-600 px-4 py-2 rounded ${
                    isActive(path) ? 'bg-red-600 text-yellow-300' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
