import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.avif";
import logoImage from "@/assets/logo.png";
import lenovoLogo from "@/assets/brand-logos/Lenovo.png";
import wowLogo from "@/assets/brand-logos/Wow skin science.png";
import groheLogo from "@/assets/brand-logos/Wow momo.png";
import hyattLogo from "@/assets/brand-logos/Hyatt regency Delhi.png";

import MobileNavigation from "@/components/MobileNavigation"; // Adjust path as necessary

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
    <div className="w-[1900px] max-w-full min-h-[700px] mx-auto px-4 pt-4">
  <div className="rounded-3xl border border-border/70 bg-background/50 backdrop-blur-sm overflow-hidden relative">
         {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-[90vh] bg-cover bg-center bg-no-repeat rounded-3xl opacity-60 -z-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />


        {/* Navigation */}
<nav className="relative z-100">
  <div className="px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-center gap-[250px]">
    {/* Logo - Only for Desktop */}
    <div className="hidden md:flex items-center">
      <img
        src={logoImage}
        alt="Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 mr-16"
      />
    </div>

    {/* Desktop Navigation Links */}
    <div className="hidden md:flex items-center gap-16">
      <a
        href="#services"
        className="text-text-primary hover:text-text-secondary transition-colors duration-300"
      >
        Services
      </a>
      <a
        href="#testimonials"
        className="text-text-primary hover:text-text-secondary transition-colors duration-300"
      >
        Testimonials
      </a>
      <a
        href="#faq"
        className="text-text-primary hover:text-text-secondary transition-colors duration-300"
      >
        FAQ
      </a>
    </div>

    {/* Desktop CTA Button */}
    <Button
      className="hidden md:inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-[rgb(228,40,0)] text-white hover:bg-white hover:text-black transition-colors duration-300"
      onClick={() =>
        window.open("https://wa.me/message/IQTHGYV7MGIIL1", "_blank")
      }
    >
      {/* Text */}
      <span>Get Started</span>

      {/* Green Divider line */}
      <span className="w-px h-5 bg-green-500 mx-3"></span>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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

  {/* 80% width border */}
  <div className="flex justify-center">
    <div className="w-[80%] h-px bg-border/70"></div>
  </div>

  {/* Mobile Navigation (includes logo + hamburger) */}
  <div className="md:hidden">
    <MobileNavigation logoImage={logoImage} />
  </div>
</nav>



        {/* Hero Content */}
<section className=" min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-start sm:justify-center relative pl-4 sm:pl-12 md:pl-20 lg:pl-28">
  <div className="flex-1 flex items-start sm:items-center py-2 sm:py-8 lg:py-12">

    <div className="px-4 sm:px-6 md:px-8 text-left relative z-10 max-w-4xl">
      {/* Headline */}
      <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-snug mb-6 sm:mb-10 tracking-tight
  [background-image:linear-gradient(327deg,rgb(236,92,74)_9%,rgb(228,40,0)_21%,rgb(255,162,141)_56%)] bg-clip-text text-transparent uppercase"
>
  WE HELP YOU FIND WHAT'S OFF,
  <br />
  RETHINK WHAT MATTERS,
  <br />
  AND SCALE WHAT WORKS
</h1>



      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center w-full sm:w-auto mb-2 sm:mb-0">
        <Button
  className="
    w-full sm:w-auto 
    bg-[rgb(228,40,0)] hover:bg-[#c53000] 
    text-lg sm:text-base md:text-xl 
    px-8 sm:px-6 md:px-8 
    py-4 sm:py-3 md:py-4 
    rounded-full
  "
  data-cal-link="spark-trend-clarity-call/30min"
  data-cal-namespace="30min"
  data-cal-config='{"layout":"month_view"}'
>
  Discovery call
  <svg
    width="20"
    height="20"
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
  asChild
  variant="outline"
  className="
    w-full sm:w-auto
    border border-white text-white hover:bg-white/10
    text-lg sm:text-base md:text-xl
    px-8 sm:px-6 md:px-8
    py-4 sm:py-3 md:py-4
    rounded-full
  "
>
  <a
    href="https://wa.me/message/IQTHGYV7MGIIL1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Reach out
  </a>
</Button>

      </div>
    </div>
  </div>

  {/* Logo Carousel */}
  <div className="relative z-10 pb-6 sm:pb-12 mt-4 ">
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
    // { src: wowLogo, alt: "WOW", width: "w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-20" }
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="container mx-auto flex justify-center max-w-6xl">
  <div className="overflow-hidden border-t border-border/30 pt-6 sm:pt-8 relative w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] mx-auto">
    {/* Left shadow fade */}
    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
    {/* Right shadow fade */}
    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
    <div className="relative">
      <div className="flex items-center logo-scroll space-x-8 sm:space-x-12 md:space-x-20 py-6 sm:py-8 px-4 sm:px-8">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`${logo.width} h-10 sm:h-12 md:h-14 flex items-center justify-center flex-shrink-0`}
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
