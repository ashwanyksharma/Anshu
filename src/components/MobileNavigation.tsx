import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from 'lucide-react';

interface MobileNavigationProps {
  logoImage: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ logoImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking a link
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="relative z-50 w-full">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={logoImage}
            alt="Logo"
            className="w-14 h-14 sm:w-20 sm:h-20"
          />
        </div>

        {/* Hamburger Button */}
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-10 h-10 text-white" /> : <Menu className="w-10 h-10 text-white" />}
        </Button>
      </div>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-gray-700"></div>
      </div>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out w-full bg-[#0D0D0D]/95 backdrop-blur-sm ${
          isOpen ? 'max-h-[500px] mt-2' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          {['#services', '#testimonials', '#faq'].map((href) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-white font-semibold text-xl sm:text-2xl hover:text-[#E84000] transition-colors duration-300"
            >
              {href.replace('#', '').replace('-', ' ').toUpperCase()}
            </button>
          ))}

          {/* CTA Button */}
          <Button
            className="mt-4 bg-gradient-to-r from-[#E84000] to-[#FF3C2B] text-white font-semibold py-3 px-8 sm:py-4 sm:px-12 rounded-full text-lg sm:text-xl shadow-lg hover:scale-105 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
