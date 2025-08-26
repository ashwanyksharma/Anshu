import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from 'lucide-react';

interface MobileNavigationProps {
  logoImage: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ logoImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <nav className="relative z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#services"
              className="text-white font-semibold hover:text-gray-300 transition-colors duration-300 text-sm xl:text-base"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-white font-semibold hover:text-gray-300 transition-colors duration-300 text-sm xl:text-base"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-white font-semibold hover:text-gray-300 transition-colors duration-300 text-sm xl:text-base"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden sm:inline-flex text-sm lg:text-base px-6 py-2 bg-gradient-to-r from-[#E84000] to-[#FF3C2B] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 lg:w-4 lg:h-4"
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </Button>
        </div>

        {/* 80% width border */}
        <div className="flex justify-center">
          <div className="w-[80%] h-px bg-gray-700"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-[#0D0D0D] animate-in fade-in duration-200 flex flex-col items-center justify-center"
          onClick={closeMenu}
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <button
              onClick={() => handleNavClick('#services')}
              className="text-white font-semibold text-lg sm:text-xl"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('#testimonials')}
              className="text-white font-semibold text-lg sm:text-xl"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-white font-semibold text-lg sm:text-xl"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              className="bg-gradient-to-r from-[#E84000] to-[#FF3C2B] text-white font-semibold py-3 px-8 rounded-full text-base sm:text-lg shadow-lg hover:scale-105 transition-transform"
              onClick={closeMenu}
            >
              Get Started
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4"
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
      )}
    </>
  );
};

export default MobileNavigation;
