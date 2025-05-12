
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "I've been using the Organic Greens Superfood for 3 months, and the difference in my energy levels is incredible. My clients have noticed my increased vitality during training sessions!",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Taylor",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "The Premium Plant Protein has been a game-changer for my recovery between training sessions. Clean ingredients and great taste without the chalky texture of other brands.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "After two months of taking the Marine Collagen Peptides, I've noticed significant improvement in my skin's elasticity and my joints feel more flexible during my yoga practice.",
    rating: 4
  },
  {
    id: 4,
    name: "Jason Rodriguez",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "The Essential Multivitamin has everything my body needs to keep my immune system strong while working with clients all day. I appreciate the attention to quality.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerView = 2;
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerView) - 1;

  const nextSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  // Get current visible testimonials
  const visibleTestimonials = () => {
    const startIndex = activeIndex * testimonialsPerView;
    return testimonials.slice(startIndex, startIndex + testimonialsPerView);
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Read genuine reviews from our community of health enthusiasts
        </p>
        
        <div className="relative mt-12">
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute -left-4 md:-left-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-brand-green hover:text-white transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-brand-green hover:text-white transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials().map(testimonial => (
              <div 
                key={testimonial.id} 
                className="bg-brand-light rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-brand-green"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                activeIndex === index ? 'bg-brand-green w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
