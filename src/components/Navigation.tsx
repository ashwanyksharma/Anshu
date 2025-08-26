import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="z-50 bg-background/80 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-8 h-8 mr-2" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            FAQ
          </a>
        </div>

        {/* CTA Button (Desktop only) */}
        <Button variant="hero" className="hidden md:inline-flex">
          Get Started
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
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
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a
            href="#services"
            onClick={closeMenu}
            className="block text-text-secondary hover:text-text-primary transition"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="block text-text-secondary hover:text-text-primary transition"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className="block text-text-secondary hover:text-text-primary transition"
          >
            FAQ
          </a>

          {/* Mobile CTA */}
          <Button
            variant="hero"
            className="w-full"
            onClick={closeMenu}
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
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
      )}
    </nav>
  );
};

export default Navigation;
