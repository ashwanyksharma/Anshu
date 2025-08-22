import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      number: "1",
      title: "CLARITY BEFORE CREATION",
      description: "We audit your brand from the inside out. Split what clicks and what holds you back, lay the strategy before the first design.",
      ctaText: "Discovery call",
      imageContent: (
        <div className="w-full max-w-md aspect-square bg-gradient-to-br from-surface to-surface/20 rounded-2xl border border-border/20 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="text-6xl font-bold text-text-primary/20">01</div>
            <div className="space-y-2">
              <div className="w-20 h-1 bg-brand-orange rounded-full mx-auto"></div>
              <div className="w-16 h-1 bg-text-secondary/30 rounded-full mx-auto"></div>
              <div className="w-12 h-1 bg-text-secondary/20 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "2", 
      title: "IDENTITY IN MOTION",
      description: "Build a brand system that moves and lives across all channels. We create comprehensive visual guidelines and brand experiences.",
      ctaText: "Brand package",
      imageContent: (
        <div className="w-full max-w-md aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-border/20 p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="aspect-square bg-brand-orange/80 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">BRAND</span>
            </div>
            <div className="aspect-square bg-purple-500/80 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">IDENTITY</span>
            </div>
            <div className="aspect-square bg-pink-500/80 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">VISUAL</span>
            </div>
            <div className="aspect-square bg-blue-500/80 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">SYSTEM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "3",
      title: "LAUNCH & MOMENTUM", 
      description: "Put your brand in front of the right audiences. Targeted launch plans to bring visibility to your new image.",
      ctaText: "Schedule call",
      imageContent: (
        <div className="w-full max-w-md aspect-square bg-gradient-to-br from-brand-orange/20 to-red-500/20 rounded-2xl border border-border/20 p-6 flex items-center justify-center">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-end h-24">
              {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                <div 
                  key={index}
                  className="bg-brand-orange/60 rounded-t-lg w-4 transition-all duration-1000 hover:bg-brand-orange"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="text-center">
              <div className="text-brand-orange font-bold text-lg">↗ 156%</div>
              <div className="text-text-secondary text-xs">Growth</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background font-['Montserrat']" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              imageContent={service.imageContent}
              imageOnLeft={index % 2 === 0}
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