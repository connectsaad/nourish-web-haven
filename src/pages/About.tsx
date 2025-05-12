
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NourishHaven</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            We're on a mission to create the world's cleanest, most effective nutritional supplements 
            that empower people to live healthier, more vibrant lives.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                NourishHaven was founded in 2017 by a team of health enthusiasts, nutritionists, and scientists who shared 
                a common frustration: the market was flooded with nutritional supplements filled with artificial ingredients, 
                excess fillers, and questionable additives.
              </p>
              <p className="text-gray-700 mb-4">
                We set out to create a new standard in the nutrition industry - supplements that deliver remarkable results 
                without compromising on ingredient quality, transparency, or sustainability.
              </p>
              <p className="text-gray-700">
                Today, we're proud to offer a comprehensive line of research-backed, clean-ingredient products 
                that support optimal health, peak performance, and natural beauty from the inside out.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand-green/10 rounded-lg h-80 md:h-96"></div>
              <img 
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transform translate-x-4 -translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-brand-light">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core principles guide everything we do at NourishHaven
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-brand-green" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Ingredients</h3>
              <p className="text-gray-600">
                We source only the highest quality natural ingredients, free from artificial colors, 
                flavors, sweeteners, and unnecessary fillers. Your body deserves the best.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand-green" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Science-Backed</h3>
              <p className="text-gray-600">
                Every formula is based on scientific research and clinically supported ingredients at 
                effective dosages. We never compromise on efficacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-brand-green" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">
                We build products based on customer feedback and foster a supportive community 
                of health-conscious individuals working together toward better health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate experts behind NourishHaven
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & Chief Nutritionist",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Michael Chen",
                role: "Chief Scientific Officer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Emma Davis",
                role: "Product Development",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "James Wilson",
                role: "Quality Control Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-brand-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-700 mb-4">
                We believe that health extends beyond individual wellness to the health of our planet. 
                That's why sustainability is at the core of everything we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-green/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Eco-Friendly Packaging</h4>
                    <p className="text-gray-600">Our packaging is made from recycled materials and is fully recyclable or biodegradable.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-green/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Responsible Sourcing</h4>
                    <p className="text-gray-600">We work with suppliers who adhere to sustainable and ethical practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-green/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Carbon Neutral Operations</h4>
                    <p className="text-gray-600">We offset our carbon footprint through investments in environmental projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainability" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission for Better Health</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Experience the difference of premium, clean nutrition backed by science and made with integrity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop" className="btn-primary bg-white text-brand-green hover:bg-gray-100">
              Shop Our Products
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-green">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
