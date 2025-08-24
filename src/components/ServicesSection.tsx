import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      number: "1",
      title: "CLARITY BEFORE CREATION",
      description:
        "We audit your brand from the inside out. Split what clicks and what holds you back, lay the strategy before the first design.",
      videoSrc: "/videos/webdev.mp4",
    },
    {
      number: "2",
      title: "IDENTITY IN MOTION",
      description:
        "Build a brand system that moves and lives across all channels. We create comprehensive visual guidelines and brand experiences.",
      videoSrc: "/videos/appdev.mp4",
    },
    {
      number: "3",
      title: "LAUNCH & MOMENTUM",
      description:
        "Put your brand in front of the right audiences. Targeted launch plans to bring visibility to your new image.",
      videoSrc: "/videos/cloud.mp4",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-24 bg-background font-['Montserrat']"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
            <span className="text-primary-foreground text-xs sm:text-sm font-semibold tracking-wide uppercase font-['Montserrat']">
              Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight font-['Montserrat'] px-4">
            BRANDS DON'T BREAK AT SCALE —{" "}
            <span className="hero-text">THEY CRACK AT THE FOUNDATION</span>
          </h2>
        </div>

    
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              videoSrc={service.videoSrc}
              imageOnLeft={index % 2 === 0}
              autoPlay
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
