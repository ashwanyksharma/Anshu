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

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    closeMenu();
    // Smooth scroll to section
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
            <img src={logoImage} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a 
              href="#services" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm xl:text-base"
            >
              Services
            </a>
            <a 
              href="#creators" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm xl:text-base"
            >
              Creators
            </a>
            <a 
              href="#testimonials" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm xl:text-base"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm xl:text-base"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA Button */}
          <Button variant="hero" className="hidden sm:inline-flex text-sm lg:text-base px-4 lg:px-6">
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
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </Button>
        </div>

        {/* 80% width border */}
        <div className="flex justify-center">
          <div className="w-[80%] h-px bg-border/70"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={closeMenu}
        >
          <div 
            className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-background/95 backdrop-blur-md border-l border-border/70 shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/70">
              <div className="flex items-center">
                <img src={logoImage} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
                <span className="text-text-primary font-semibold text-sm sm:text-base">Spark Trend</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeMenu}
                className="w-8 h-8 hover:bg-surface"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col p-4 sm:p-6 space-y-4 sm:space-y-6 h-full overflow-y-auto">
              {/* Navigation Links */}
              <div className="space-y-2 sm:space-y-4">
                <button
                  onClick={() => handleNavClick('#services')}
                  className="block w-full text-left text-text-secondary hover:text-brand-orange transition-colors duration-300 py-3 px-2 text-base sm:text-lg rounded-lg hover:bg-surface/50"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick('#creators')}
                  className="block w-full text-left text-text-secondary hover:text-brand-orange transition-colors duration-300 py-3 px-2 text-base sm:text-lg rounded-lg hover:bg-surface/50"
                >
                  Creators
                </button>
                <button
                  onClick={() => handleNavClick('#testimonials')}
                  className="block w-full text-left text-text-secondary hover:text-brand-orange transition-colors duration-300 py-3 px-2 text-base sm:text-lg rounded-lg hover:bg-surface/50"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="block w-full text-left text-text-secondary hover:text-brand-orange transition-colors duration-300 py-3 px-2 text-base sm:text-lg rounded-lg hover:bg-surface/50"
                >
                  FAQ
                </button>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4 sm:pt-6 border-t border-border/70 mt-auto">
                <Button 
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-primary-foreground py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={closeMenu}
                >
                  Get Started
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 sm:w-4 sm:h-4"
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
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
