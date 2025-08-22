import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-8 h-8 mr-2" />
        </div>

        {/* Navigation Links */}
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

        {/* CTA Button */}
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
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 12H21M3 6H21M3 18H21" 
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