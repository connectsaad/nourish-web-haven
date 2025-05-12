
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Filter, ArrowUpDown } from 'lucide-react';

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Plant Protein",
    category: "Protein",
    price: 49.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["vegan", "protein"]
  },
  {
    id: 2,
    name: "Marine Collagen Peptides",
    category: "Collagen",
    price: 39.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606937295546-46b297659883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["collagen", "beauty"]
  },
  {
    id: 3,
    name: "Organic Greens Superfood",
    category: "Superfoods",
    price: 54.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e9e9952a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["vegan", "superfoods"]
  },
  {
    id: 4,
    name: "Essential Multivitamin",
    category: "Vitamins",
    price: 29.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["vitamins", "womens-health"]
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: 34.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1577640905050-82677a7a3671?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["supplements"]
  },
  {
    id: 6,
    name: "Vegan Vitamin D3",
    category: "Vitamins",
    price: 24.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["vegan", "vitamins"]
  }
];

// Category options
const categories = [
  "All Categories",
  "Protein",
  "Collagen",
  "Superfoods",
  "Vitamins",
  "Supplements",
  "Vegan",
  "Women's Health"
];

// Sort options
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Sellers", value: "best-sellers" },
  { label: "New Arrivals", value: "new-arrivals" }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

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

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Categories" 
    ? products 
    : products.filter(product => 
        product.category === selectedCategory || 
        product.tags.includes(selectedCategory.toLowerCase().replace("'s", "s"))
      );
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <main className="bg-brand-light py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Shop Our Products</h1>
        <p className="text-center text-gray-600 mb-8">Premium nutrition for optimal health and wellness</p>
        
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button 
            className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 bg-white"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={18} />
            <span>Filter & Sort</span>
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters - desktop always visible, mobile toggleable */}
          <aside className={`w-full lg:w-1/4 ${filterOpen ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-lg shadow-md h-fit`}>
            <h2 className="font-semibold text-xl mb-4">Categories</h2>
            <div className="space-y-2 mb-8">
              {categories.map(category => (
                <div key={category} className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 mr-2 border rounded ${
                      selectedCategory === category ? 'bg-brand-green border-brand-green' : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {selectedCategory === category && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </span>
                    {category}
                  </label>
                </div>
              ))}
            </div>
            
            <h2 className="font-semibold text-xl mb-4">Sort By</h2>
            <div className="space-y-2">
              {sortOptions.map(option => (
                <div key={option.value} className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sortBy"
                      checked={sortBy === option.value}
                      onChange={() => setSortBy(option.value)}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 mr-2 border rounded ${
                      sortBy === option.value ? 'bg-brand-green border-brand-green' : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {sortBy === option.value && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </span>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </aside>
          
          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown for medium screens */}
            <div className="hidden md:flex lg:hidden justify-end mb-4">
              <div className="relative inline-block">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ArrowUpDown size={16} />
                </div>
              </div>
            </div>
            
            {/* Product count */}
            <p className="text-gray-600 mb-6">{sortedProducts.length} products</p>
            
            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
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
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-brand-green transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{product.rating}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">${product.price}</span>
                      <button className="bg-brand-green text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-md bg-brand-green text-white flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:border-brand-green">2</button>
                <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:border-brand-green">3</button>
                <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:border-brand-green">4</button>
                <span className="w-10 h-10 rounded-md flex items-center justify-center">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
