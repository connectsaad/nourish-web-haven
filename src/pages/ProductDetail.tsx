
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock product data
const product = {
  id: 1,
  name: "Premium Plant Protein",
  category: "Protein",
  price: 49.99,
  rating: 4.9,
  reviewCount: 124,
  description: "Our Premium Plant Protein is a complete protein source derived from organic peas, brown rice, and hemp seeds. With 25g of protein per serving and a complete amino acid profile, it's perfect for post-workout recovery, muscle maintenance, and as a nutrient-dense meal addition.",
  highlights: [
    "25g protein per serving",
    "Complete amino acid profile",
    "No artificial sweeteners",
    "Smooth texture, delicious vanilla flavor",
    "Easily digestible formula",
    "Made from organic plant sources"
  ],
  images: [
    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510942369063-35acdbdb53da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  ingredients: "Organic Pea Protein, Organic Brown Rice Protein, Organic Hemp Protein, Natural Vanilla Flavor, Monk Fruit Extract, Stevia Extract, Xanthan Gum, Sea Salt.",
  nutritionFacts: {
    servingSize: "1 scoop (30g)",
    servings: 20,
    calories: 120,
    protein: 25,
    carbs: 2,
    fat: 1.5,
    sodium: 240
  },
  howToUse: "Mix one scoop with 8-12 oz of water, plant milk, or your favorite beverage. Shake well. Consume post-workout or anytime you need a protein boost. Can be blended into smoothies or incorporated into recipes."
};

// Mock related products
const relatedProducts = [
  {
    id: 2,
    name: "Vegan Pre-Workout Formula",
    category: "Performance",
    price: 39.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Plant-Based BCAA",
    category: "Amino Acids",
    price: 34.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1510942369063-35acdbdb53da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Recovery Blend",
    category: "Performance",
    price: 44.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

// Tabs
const tabs = ["Description", "Ingredients", "Nutrition Facts", "How to Use"];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
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
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + product.images.length) % product.images.length);
  };
  
  const selectImage = (index: number) => {
    setActiveImageIndex(index);
  };
  
  return (
    <main className="bg-white py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-green">Home</Link> {" / "}
          <Link to="/shop" className="hover:text-brand-green">Shop</Link> {" / "}
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-green">{product.category}</Link> {" / "}
          <span className="text-gray-700">{product.name}</span>
        </div>
        
        {/* Product overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product images */}
          <div>
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Image navigation arrows */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brand-green hover:text-white transition-colors"
                onClick={prevImage}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brand-green hover:text-white transition-colors"
                onClick={nextImage}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Thumbnail images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`w-24 h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeImageIndex === index ? 'border-brand-green' : 'border-transparent'
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <h1 className="text-3xl font-bold text-brand-dark mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            
            <p className="text-2xl font-semibold text-brand-green mb-6">${product.price}</p>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Highlights:</h3>
              <ul className="space-y-1 text-gray-700">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-brand-green/10 rounded-full p-1 mr-2 mt-1">
                      <span className="block w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-8">
              <span className="text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-brand-green"
                  onClick={decreaseQuantity}
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-brand-green"
                  onClick={increaseQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
              <button className="btn-primary flex-1 flex justify-center items-center">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="btn-secondary whitespace-nowrap px-4">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="mb-16">
          {/* Tab buttons */}
          <div className="flex overflow-x-auto space-x-1 border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-3 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-brand-green text-brand-green'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="py-6">
            {activeTab === "Description" && (
              <div>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-brand-green/10 rounded-full p-1.5 mr-3">
                        <span className="block w-2 h-2 bg-brand-green rounded-full"></span>
                      </span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "Ingredients" && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Ingredients</h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            )}
            
            {activeTab === "Nutrition Facts" && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Nutrition Facts</h3>
                <div className="border border-gray-300 rounded-md max-w-md overflow-hidden">
                  <div className="bg-gray-100 px-5 py-3 font-semibold">
                    Nutrition Information
                  </div>
                  <div className="p-5">
                    <p className="mb-2"><strong>Serving Size:</strong> {product.nutritionFacts.servingSize}</p>
                    <p className="mb-2"><strong>Servings Per Container:</strong> {product.nutritionFacts.servings}</p>
                    
                    <div className="border-t border-gray-300 my-4"></div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-700">Calories</div>
                      <div className="font-semibold">{product.nutritionFacts.calories}</div>
                      
                      <div className="text-gray-700">Protein</div>
                      <div className="font-semibold">{product.nutritionFacts.protein}g</div>
                      
                      <div className="text-gray-700">Total Carbohydrates</div>
                      <div className="font-semibold">{product.nutritionFacts.carbs}g</div>
                      
                      <div className="text-gray-700">Total Fat</div>
                      <div className="font-semibold">{product.nutritionFacts.fat}g</div>
                      
                      <div className="text-gray-700">Sodium</div>
                      <div className="font-semibold">{product.nutritionFacts.sodium}mg</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "How to Use" && (
              <div>
                <h3 className="font-semibold text-lg mb-4">How to Use</h3>
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold hover:text-brand-green transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-brand-green font-semibold">${product.price}</span>
                  </div>
                  
                  <button className="w-full mt-2 bg-brand-green/10 text-brand-green font-medium py-2 rounded-md hover:bg-brand-green hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
