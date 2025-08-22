import React from "react";
import { Target, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Target className="w-8 h-8 text-brand-orange" aria-hidden="true" />, 
    title: "Strategic Analysis",
    description: "We design solutions that don't just look good — they perform. Every element is crafted to drive specific outcomes."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-orange" aria-hidden="true" />, 
    title: "Quick Decisions",
    description: "Every decision is backed by insights, not guesswork. We leverage data, psychology, and market expertise to guide every choice."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-orange" aria-hidden="true" />, 
    title: "Consistent Growth",
    description: "We build comprehensive brand systems that help — benchmarks clearly explain how products flow better than just guesswork."
  }
];

function ClaritySection() {
  return (
    <section className="py-24 bg-background" id="clarity" aria-labelledby="clarity-heading">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-8 py-3 mb-8">
            <span className="text-primary-foreground text-sm font-semibold tracking-wide uppercase">
              Discovery
            </span>
          </div>
          <h2
            id="clarity-heading"
            className="text-3xl md:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight"
          >
            FROM CLARITY TO SCALE —
            <span className="block mt-2">WITHOUT THE GUESSWORK</span>
          </h2>
        </div>

        {/* Features Grid */}
        <ul className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto" role="list">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
              tabIndex={0}
              aria-label={`${feature.title}: ${feature.description}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center group-hover:bg-surface-hover transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ClaritySection;