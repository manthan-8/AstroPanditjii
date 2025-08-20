import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
];

const panchangOptions = [
  { path: '/panchang', label: 'Panchang', hindi: 'पंचांग' },
  { path: '/subhmuhraat', label: 'Subh Muhraat', hindi: 'शुभ मुहूर्त' },
  { path: '/nakshtra', label: 'Nakshtra', hindi: 'नक्षत्र' },
  { path: '/chokdiya', label: 'Chokdiya', hindi: 'चौकदिया' },
  { path: '/rahu-kaal', label: 'Rahu Kaal', hindi: 'राहु काल' }
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isPanchangDropdownOpen, setIsPanchangDropdownOpen] = useState(false);
  const [isMobilePanchangOpen, setIsMobilePanchangOpen] = useState(false);
  const location = useLocation();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const panchangDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toast('क्या आप प्यार में पागल हो चुके हैं');
  }, []);

  // Close dropdowns if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (panchangDropdownRef.current && !panchangDropdownRef.current.contains(event.target as Node)) {
        setIsPanchangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isPanchangActive = () => panchangOptions.some(option => location.pathname === option.path);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangDropdownOpen(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

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
                className={`text-black font-medium hover:text-orange-700 transition-colors ${
                  isActive(path) ? 'text-orange-800 border-b-2 border-orange-800' : ''
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Panchang Dropdown Desktop */}
            <div className="relative" ref={panchangDropdownRef}>
              <button
                onClick={() => setIsPanchangDropdownOpen(!isPanchangDropdownOpen)}
                className={`flex items-center space-x-1 text-black font-medium hover:text-orange-700 transition-colors ${
                  isPanchangActive() ? 'text-orange-800 border-b-2 border-orange-800' : ''
                }`}
                type="button"
              >
                <span>Panchang</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isPanchangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPanchangDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  {panchangOptions.map(option => (
                    <Link
                      key={option.path}
                      to={option.path}
                      onClick={() => setIsPanchangDropdownOpen(false)}
                      className={`block px-4 py-3 text-sm hover:bg-yellow-50 transition-colors ${
                        isActive(option.path) ? 'bg-yellow-100 text-orange-800 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{option.label}</span>
                        <span className="text-xs text-gray-500">{option.hindi}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Language Dropdown Desktop */}
            <div className="relative ml-4" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-2xl focus:outline-none transition px-2"
                aria-label="Select Language"
                type="button"
              >
                <span>{currentLang.flag}</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm w-full hover:bg-yellow-200 rounded-md ${
                        lang.code === currentLang.code ? 'font-bold bg-yellow-300' : ''
                      }`}
                      type="button"
                    >
                      <span className="text-2xl">{lang.flag}</span> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-orange-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 mb-4 shadow-lg">
            <nav className="flex flex-col py-4 space-y-2 px-4">
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
                  onClick={() => setIsMenuOpen(false)}
                  className={`bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text font-bold hover:bg-red-600 px-4 py-2 rounded transition-colors ${
                    isActive(path) ? 'bg-red-600 text-yellow-300' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Panchang Dropdown Mobile */}
<div className="border-t border-red-600 pt-2 mt-2">
  <button
    onClick={() => setIsMobilePanchangOpen(!isMobilePanchangOpen)}
    className="flex justify-between items-center bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text px-4 py-2 text-sm font-bold w-full focus:outline-none"

    type="button"
    aria-expanded={isMobilePanchangOpen}
  >
    <span>Panchang</span>
    <ChevronDown
      className={`h-4 w-4 transition-transform text-orange-500 ${
  isMobilePanchangOpen ? 'rotate-180' : ''
}`}

    />
  </button>
  
  {isMobilePanchangOpen && (
    <div className="mt-1 ml-4 flex flex-col space-y-1">
      {panchangOptions.map(option => (
        <Link
          key={option.path}
          to={option.path}
          onClick={() => {
            setIsMenuOpen(false);
            setIsMobilePanchangOpen(false);
          }}
          className={`text-black hover:bg-red-600 px-4 py-2 rounded transition-colors ${
            isActive(option.path) ? 'bg-red-600 text-yellow-300 font-semibold' : ''
          }`}
        >
          <div className="flex flex-col">
            <span>{option.label}</span>
            <span className="text-xs text-black">{option.hindi}</span>
          </div>
        </Link>
      ))}
    </div>
  )}
</div>


              {/* Language Dropdown Mobile */}
              <div className="relative mt-2" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white focus:outline-none bg-gradient-to-r from-orange-500 to-red-600 text-white  hover:ring-opacity-70 transition"
                  aria-label="Select Language"
                  type="button"
                >
                  {currentLang.flag}
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-red-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-30 z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm w-full hover:bg-yellow-300 rounded-md transition-colors ${
                          lang.code === currentLang.code ? 'font-bold bg-yellow-400' : 'text-white'
                        }`}
                        type="button"
                      >
                        <span className="text-2xl">{lang.flag}</span> {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;