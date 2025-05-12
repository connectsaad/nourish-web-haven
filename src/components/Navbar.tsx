
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="font-montserrat font-bold text-2xl text-brand-dark">
          NourishHaven
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-brand-green transition-colors">Home</Link>
          <Link to="/shop" className="font-medium text-gray-700 hover:text-brand-green transition-colors">Shop</Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-brand-green transition-colors">About</Link>
          <Link to="/blog" className="font-medium text-gray-700 hover:text-brand-green transition-colors">Blog</Link>
          <Link to="/faq" className="font-medium text-gray-700 hover:text-brand-green transition-colors">FAQ</Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-green transition-colors">Contact</Link>
        </div>
        
        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/account" className="text-gray-700 hover:text-brand-green">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-brand-green relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full py-4 absolute top-16 left-0 shadow-md z-50">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t">
              <Link 
                to="/account" 
                className="flex items-center text-gray-700 hover:text-brand-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} className="mr-2" />
                <span>My Account</span>
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center text-gray-700 hover:text-brand-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative">
                  <ShoppingCart size={20} className="mr-2" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
