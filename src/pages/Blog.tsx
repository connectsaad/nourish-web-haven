
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Plant-Based Protein: Benefits and Best Sources",
    excerpt: "Understand the complete amino acid profiles of various plant proteins and how they compare to animal sources. Learn which combinations provide optimal nutrition.",
    category: "Nutrition",
    author: "Dr. Sarah Johnson",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["protein", "plant-based", "nutrition"]
  },
  {
    id: 2,
    title: "Collagen for Joint Health: What the Research Says",
    excerpt: "Dive into the latest research on collagen supplementation for joint health, osteoarthritis, and sports recovery. Learn optimal dosing strategies.",
    category: "Research",
    author: "Michael Chen, Ph.D.",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1599486602173-d35f3876a7d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["collagen", "joints", "research"]
  },
  {
    id: 3,
    title: "Morning Superfood Smoothie Recipes for Energy and Focus",
    excerpt: "Five delicious smoothie recipes packed with superfoods to boost your morning energy, mental clarity, and nutritional intake for the day ahead.",
    category: "Recipes",
    author: "Emma Davis",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["recipes", "superfoods", "smoothies"]
  },
  {
    id: 4,
    title: "Understanding Vitamin D: The Sunshine Nutrient Most People Lack",
    excerpt: "Why vitamin D deficiency is so common, how it affects your health, and the best ways to optimize your levels through supplements and lifestyle.",
    category: "Health",
    author: "Dr. Sarah Johnson",
    date: "April 18, 2025",
    image: "https://images.unsplash.com/photo-1616803140344-6682afb13cad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["vitamins", "health", "nutrition"]
  },
  {
    id: 5,
    title: "Pre and Post Workout Nutrition: Optimize Your Training Results",
    excerpt: "The complete guide to timing your nutrition around workouts for maximum muscle growth, recovery, and performance improvements.",
    category: "Fitness",
    author: "James Wilson",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["fitness", "nutrition", "workout"]
  },
  {
    id: 6,
    title: "The Gut-Brain Connection: How Nutrition Affects Mental Health",
    excerpt: "The fascinating science behind how your gut microbiome influences your mood, cognitive function, and long-term mental health.",
    category: "Health",
    author: "Michael Chen, Ph.D.",
    date: "April 3, 2025",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["gut-health", "mental-health", "research"]
  }
];

// Categories and tags for filtering
const categories = ["All", "Nutrition", "Research", "Recipes", "Health", "Fitness"];
const popularTags = ["protein", "collagen", "vitamins", "superfoods", "gut-health", "fitness"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });
  
  return (
    <main className="bg-brand-light py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice, nutrition tips, recipes, and the latest research to help you live your healthiest life.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            {/* Category filter */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-3 rounded-md whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? 'bg-brand-green text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.id}`}>
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-brand-green/10 text-brand-green text-sm py-1 px-3 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-semibold mb-3 hover:text-brand-green transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block mt-4 text-brand-green font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No matching articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
        
        {/* Sidebar - Popular tags */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tag size={18} className="mr-2 text-brand-green" />
            Popular Tags
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <button
                key={tag}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-3 rounded-full text-sm transition-colors"
                onClick={() => setSearchQuery(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
