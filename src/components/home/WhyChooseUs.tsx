
import { Leaf, FlaskRound, Truck } from 'lucide-react';

const features = [
  {
    title: "100% Natural",
    description: "All our products are made from clean, natural ingredients with no artificial fillers or additives.",
    icon: Leaf
  },
  {
    title: "Lab-Tested",
    description: "Every batch is rigorously tested for purity, potency, and quality in certified labs.",
    icon: FlaskRound
  },
  {
    title: "Fast Shipping",
    description: "Free shipping on all orders over $50 with quick delivery right to your doorstep.",
    icon: Truck
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          We're committed to providing you with the highest quality nutritional products
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 mb-6 mx-auto">
                <feature.icon size={32} className="text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
