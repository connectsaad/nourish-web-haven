
import { Link } from 'react-router-dom';

const ScienceSection = () => {
  return (
    <section className="py-16 bg-brand-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn opacity-0" style={{animationDelay: "0.2s"}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Backed by <span className="text-brand-green">Advanced Science</span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Our research team combines cutting-edge technology with nutritional science to create the most effective supplements available.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-1">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                </div>
                <p>Advanced bioavailability technology ensures maximum nutrient absorption</p>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-1">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                </div>
                <p>Patented extraction methods preserve the full spectrum of beneficial compounds</p>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-1">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                </div>
                <p>Third-party tested for purity, potency and safety in ISO-certified laboratories</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-block bg-brand-green text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:animate-glow">
              Learn About Our Research
            </Link>
          </div>
          
          <div className="relative animate-fadeIn opacity-0" style={{animationDelay: "0.4s"}}>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-green rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-peach rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Scientific laboratory research" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block bg-brand-green/20 backdrop-blur-sm text-brand-green text-sm px-3 py-1 rounded-full mb-2">
                  Research-Backed
                </span>
                <h3 className="text-2xl font-bold mb-2">Nutrient Optimization</h3>
                <p className="text-sm text-white/80">
                  Our lab develops advanced nutrient delivery systems for maximum bioavailability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
