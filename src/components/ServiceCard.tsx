import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features?: string[];
  ctaText: string;
  videoSrc?: string; 
  className?: string;
  style?: React.CSSProperties;
  imageOnLeft?: boolean;
  autoPlay?: boolean; 
  controls?: boolean;
}

const ServiceCard = ({ 
  number, 
  title, 
  description, 
  features, 
  ctaText, 
  videoSrc,
  className = "",
  style,
  imageOnLeft = false,
  autoPlay = true,
  controls = false
}: ServiceCardProps) => {
  return (
    <div 
      className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 
      rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:bg-zinc-900/80 
      transition-all duration-500 hover:shadow-2xl font-['Montserrat'] ${className}`} 
      style={style}
    >
      <div 
        className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center 
        ${imageOnLeft ? 'lg:grid-flow-col' : ''}`}
      >
        {/* Conditional Layout - Video on Left */}
        {imageOnLeft && (
          <div className="flex items-center justify-center lg:order-1 order-2">
            <div className="w-full max-w-sm lg:max-w-md">
              {videoSrc && (
                <video
                  src={videoSrc}
                  className="rounded-xl shadow-lg w-full"
                  autoPlay={autoPlay}
                  loop
                  muted={autoPlay} // muted only when autoPlay is true
                  playsInline
                  controls={controls}
                />
              )}
            </div>
          </div>
        )}
        
        {/* Text Content */}
        <div 
          className={`space-y-6 sm:space-y-8 flex flex-col justify-center 
          ${imageOnLeft ? 'lg:order-2 order-1' : 'order-1'}`}
        >
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] uppercase tracking-tight leading-tight">
              {number}. {title}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-['Montserrat'] font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Conditional Layout - Video on Right (default) */}
        {!imageOnLeft && (
          <div className="flex items-center justify-center order-2">
            <div className="w-full max-w-sm lg:max-w-md">
              {videoSrc && (
                <video
                  src={videoSrc}
                  className="rounded-xl shadow-lg w-full"
                  autoPlay={autoPlay}
                  loop
                  muted={autoPlay}
                  playsInline
                  controls={controls}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
