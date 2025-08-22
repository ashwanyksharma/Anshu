import { Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
    // Add your social media navigation logic here
  };

  const handleNavClick = (section: string) => {
    console.log(`${section} clicked`);
    // Add your navigation logic here
  };

  return (
    <footer className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Header with Navigation */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-6 lg:gap-0">
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 order-2 lg:order-1">
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Orange Lightning Icon */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4 sm:gap-6 lg:gap-8 order-3">
              <button
                onClick={() => handleNavClick('Services')}
                className="text-white font-montserrat font-medium hover:text-brand-orange transition-colors duration-300 text-sm sm:text-base"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('Testimonials')}
                className="text-white font-montserrat font-medium hover:text-brand-orange transition-colors duration-300 text-sm sm:text-base"
              >
                Testimonials
              </button>
            </div>
          </div>

          {/* Main Text */}
          <div className="text-center">
            <p className="text-white text-base sm:text-lg font-montserrat">
              Build a powerful agency site
            </p>
            <p className="text-white text-base sm:text-lg font-montserrat">
              with love.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 sm:pt-8 border-t border-gray-800 w-full">
            <p className="text-text-secondary text-xs sm:text-sm font-montserrat">
              © Spark trend 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;