
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-brand-light">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        <div className="order-2 md:order-1 animate-fadeIn opacity-0" style={{animationDelay: "0.2s"}}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4">
            Nourish Your Body, <br />
            <span className="text-brand-green">Elevate Your Life</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Premium quality supplements made from the finest ingredients. 
            Clean, effective, and backed by science for optimal health and performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative order-1 md:order-2 animate-fadeIn opacity-0" style={{animationDelay: "0.4s"}}>
          <div className="bg-brand-green/10 rounded-full h-72 w-72 md:h-96 md:w-96 mx-auto"></div>
          <img 
            src="https://images.unsplash.com/photo-1624958723474-06f1a6ff7692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Premium supplements" 
            className="absolute inset-0 h-full w-full object-contain mx-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
