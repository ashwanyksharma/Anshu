import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import logoImage from "@/assets/logo.png";
import lenovoLogo from "@/assets/brand-logos/Lenovo.png";
import wowLogo from "@/assets/brand-logos/Wow skin science.png";
import groheLogo from "@/assets/brand-logos/Wow momo.png";
import hyattLogo from "@/assets/brand-logos/Hyatt regency Delhi.png";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Cal.com initialization
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    Cal("init", "30min", { origin: "https://app.cal.com" });

    // @ts-ignore
    Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <div className="container mx-auto px-0 py-8">
      <div className="rounded-3xl border border-border/70 bg-background/50 backdrop-blur-sm overflow-hidden relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-3xl"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Integrated Navigation */}
        <nav className="relative z-50">
          <div className="px-8 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoImage} alt="Logo" className="w-12 h-12 mr-2" />
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
          {/* 80% width border */}
          <div className="flex justify-center">
            <div className="w-[80%] h-px bg-border/70"></div>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="min-h-[80vh] flex flex-col justify-center relative">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center py-16">
            <div className="px-8 text-left relative z-10 max-w-5xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-16 tracking-tight">
                <span className="block hero-text mb-2">
                  BUILD POWERFUL AGENCY SITES
                </span>
                <span className="block hero-text mb-2">
                  WITH CUTTING-EDGE DESIGN
                </span>
                <span className="block hero-text">
                  AND MARKETING SOLUTIONS
                </span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-20">
                <Button
                  size="lg"
                  className="text-base px-8 py-4 rounded-full"
                  data-cal-link="spark-trend-clarity-call/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Discovery call
                  <svg
                    width="18"
                    height="18"
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
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-4 rounded-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/message/IQTHGYV7MGIIL1",
                      "_blank"
                    )
                  }
                >
                  Reach out
                </Button>
              </div>
            </div>
          </div>

          {/* Logo Carousel at Bottom */}
          <div className="relative z-10 pb-12 mt-auto">
            <LogoCarousel />
          </div>
        </section>
      </div>
    </div>
  );
};

const LogoCarousel = () => {
  const logos = [
    { src: lenovoLogo, alt: "Lenovo", width: "w-20" },
    { src: wowLogo, alt: "WOW", width: "w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-20" },
    { src: hyattLogo, alt: "HYATT", width: "w-20" },
    { src: lenovoLogo, alt: "Lenovo", width: "w-20" },
    { src: wowLogo, alt: "WOW", width: "w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-20" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="container mx-auto px-8 max-w-5xl ">
      <div className="overflow-hidden border-t border-border/30 pt-8 relative">
        {/* Left shadow fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>

        {/* Right shadow fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="relative">
          <div className="flex space-x-16 items-center logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-6 flex items-center justify-center flex-shrink-0`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
