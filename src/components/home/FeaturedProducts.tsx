
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Plant Protein",
    category: "Protein",
    price: 49.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Complete amino acid profile from plant sources. Vanilla flavor."
  },
  {
    id: 2,
    name: "Marine Collagen Peptides",
    category: "Collagen",
    price: 39.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606937295546-46b297659883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Wild-caught marine collagen for skin, hair, and joint health."
  },
  {
    id: 3,
    name: "Organic Greens Superfood",
    category: "Superfoods",
    price: 54.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e9e9952a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "30 nutrient-dense superfoods in one daily scoop."
  },
  {
    id: 4,
    name: "Essential Multivitamin",
    category: "Vitamins",
    price: 29.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Complete daily nutrition with 23 essential vitamins and minerals."
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: 34.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1577640905050-82677a7a3671?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Ultra-pure, high-potency omega-3 from sustainable sources."
  }
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const maxIndex = Math.ceil(products.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  // Get current visible products based on index
  const visibleProducts = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return products.slice(startIndex, startIndex + itemsPerSlide);
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
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Discover our premium selection of scientifically formulated supplements
        </p>

        <div className="relative mt-12">
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute -left-4 md:-left-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-brand-green hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-brand-green hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProducts().map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-montserrat font-semibold text-xl text-brand-dark hover:text-brand-green transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <span className="text-brand-green font-semibold">${product.price}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{product.rating}</span>
                    </div>
                    
                    <button className="bg-brand-green text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/shop" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
