import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="z-[100] bg-background/80 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-[101]">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-1">
          {/* Logo */}
          <img src={logoImage} alt="Logo" className="w-8 h-8" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
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
        </div>

        {/* Right Section: CTA + Mobile Toggle */}
        <div className="flex items-center gap-1">
          {/* Desktop CTA */}
          <Button
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-[rgb(228,40,0)] text-white hover:bg-white hover:text-[rgb(228,40,0)] transition"
          >
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
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

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2 border border-border rounded-md hover:bg-muted/50 transition"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 shadow-lg z-[99] transition-transform duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#services"
          onClick={closeMenu}
          className="block mb-4 text-text-secondary hover:text-text-primary transition"
        >
          Services
        </a>
        <a
          href="#testimonials"
          onClick={closeMenu}
          className="block mb-4 text-text-secondary hover:text-text-primary transition"
        >
          Testimonials
        </a>
        <a
          href="#faq"
          onClick={closeMenu}
          className="block mb-6 text-text-secondary hover:text-text-primary transition"
        >
          FAQ
        </a>

        {/* Mobile CTA */}
        <Button
          className="w-full flex items-center justify-center px-5 py-3 rounded-full text-base font-medium bg-[rgb(228,40,0)] text-white hover:bg-white hover:text-[rgb(228,40,0)] transition"
          onClick={() => {
            closeMenu();
            window.open("https://wa.me/message/IQTHGYV7MGIIL1", "_blank");
          }}
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
    </nav>
  );
};

export default Navigation;
