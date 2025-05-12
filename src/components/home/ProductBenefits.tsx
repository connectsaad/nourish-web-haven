
import { Award, Zap, Leaf, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Our supplements are manufactured in FDA-registered facilities following GMP guidelines for quality assurance."
  },
  {
    icon: Zap,
    title: "Enhanced Performance",
    description: "Scientifically formulated to boost energy levels, improve mental clarity, and enhance physical performance."
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We prioritize sustainable and ethical sourcing practices to minimize environmental impact."
  },
  {
    icon: Heart,
    title: "Clinically Supported",
    description: "Ingredients backed by scientific research and clinical studies for maximum effectiveness."
  }
];

const ProductBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-light to-white">
      <div className="container-custom">
        <h2 className="section-title mb-4">Advanced Formula Benefits</h2>
        <p className="section-subtitle">
          Our cutting-edge supplements deliver exceptional results through innovative formulations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col items-center text-center hover:glow-border transition-all duration-500 animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="bg-brand-green/10 rounded-full p-4 mb-4">
                <benefit.icon size={28} className="text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
