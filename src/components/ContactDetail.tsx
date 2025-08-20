import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from 'lucide-react';

const ContactDetail = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="bg-yellow-400 text-black text-sm px-4 py-2 flex flex-wrap justify-between items-center">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaPhoneAlt />
          <span>: +91 9652 47 5566</span>
        </div>
        <div className="border-l border-black h-4 mx-2"></div>
       <div className="flex justify-center items-center h-full">
  <button className="bg-orange-500 text-white px-3 py-1 rounded-full font-medium">
    💬 Call with astrologer
  </button>
</div>
        {/* <div className="border-l border-black h-4 mx-2"></div> */}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
      <div className="relative inline-block">
  <select
    className="appearance-none bg-transparent text-white px-4 py-2 pr-8 rounded-md text-sm font-medium focus:outline-none focus:ring-0 cursor-pointer"
    value={i18n.language}
    onChange={handleLanguageChange}
  >
    <option value="en" className="text-black">🇬🇧 English</option>
    <option value="hi" className="text-black">🇮🇳 हिंदी</option>
  </select>

  {/* Dropdown icon (▼) */}
  <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm">
    ▼
  </span>
</div>
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactDetail;
