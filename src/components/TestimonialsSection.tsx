import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Great. These helped us build outstanding UX for our customers. Our Signit. Team had a wonderful time during this program.",
      author: "Darlene Robertson",
      company: "Director of Sales at SignIt"
    },
    {
      rating: 5,
      text: "Spark Trend has helped us create more value with their confidence. Our SignIt. Team had a wonderful time with the outstanding UX team and achieved all of our goals.",
      author: "Gary Coleman",
      company: "Art Director at SigmaSoft"
    },
    {
      rating: 5,
      text: "Great work quality. Jane built something nice with fast. They collaborated well with our team helping set their goals to team work through.",
      author: "Ruby Walker",
      company: "CEO Founder at InnovatTech"
    },
    {
      rating: 5,
      text: "These wonderful and beautiful many other tools and stuff it's wonderful and beautiful working with those people.",
      author: "Leslie Alexander",
      company: "Founder at CreativeStudio"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
    ));
  };

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-8 py-3 mb-8">
            <span className="text-primary-foreground text-sm font-semibold tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight">
            WHAT OUR CLIENTS SAY{" "}
            <span className="block mt-2">ABOUT US</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-2xl border border-border hover:border-brand-orange/30 transition-all duration-300 group hover:scale-105"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Text */}
              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-orange-hover rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-text-primary font-medium text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-text-secondary text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;