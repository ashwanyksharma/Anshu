import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features?: string[];
  ctaText: string;
  imageContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  imageOnLeft?: boolean;
}

const ServiceCard = ({ 
  number, 
  title, 
  description, 
  features, 
  ctaText, 
  imageContent,
  className = "",
  style,
  imageOnLeft = false
}: ServiceCardProps) => {
  return (
    <div className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:bg-zinc-900/80 transition-all duration-500 hover:shadow-2xl font-['Montserrat'] ${className}`} style={style}>
      <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${imageOnLeft ? 'lg:grid-flow-col' : ''}`}>
        {/* Conditional Layout - Image on Left */}
        {imageOnLeft && (
          <div className="flex items-center justify-center lg:order-1 order-2">
            <div className="w-full max-w-sm lg:max-w-md">
              {imageContent}
            </div>
          </div>
        )}
        
        {/* Text Content */}
        <div className={`space-y-6 sm:space-y-8 flex flex-col justify-center ${imageOnLeft ? 'lg:order-2 order-1' : 'order-1'}`}>
          {/* Service Number and Title */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] uppercase tracking-tight leading-tight">
              {number}. {title}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-['Montserrat'] font-medium">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            className="bg-orange-600 hover:bg-white text-black hover:text-black rounded-full px-6 sm:px-8 py-6 sm:py-8 text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 font-['Montserrat'] border-0 w-fit flex items-center"
            onClick={() => console.log(`${ctaText} clicked`)}
          >
            {ctaText}
            <div className="w-px h-4 sm:h-5 bg-black mx-2 sm:mx-3"></div>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-5"
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

        {/* Conditional Layout - Image on Right (default) */}
        {!imageOnLeft && (
          <div className="flex items-center justify-center order-2">
            <div className="w-full max-w-sm lg:max-w-md">
              {imageContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;