import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-yellow-300 font-medium focus:outline-none"
      >
        Eng ▼
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-orange-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("hi")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-orange-100"
          >
            हिन्दी
          </button>
        </div>
      )}
    </div>
  );
}
