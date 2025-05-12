
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-4">NourishHaven</h4>
            <p className="text-gray-300 mb-6">
              Premium nutrition solutions for health-conscious individuals. Clean, effective, and sustainably sourced supplements.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-peach">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-peach">
                <Facebook size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-peach">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-peach">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/return-policy" className="text-gray-300 hover:text-white transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers, health tips, and product updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md w-full outline-none focus:ring-2 focus:ring-brand-green"
              />
              <button
                type="submit"
                className="bg-brand-green text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NourishHaven. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-2">Contact:</span>
            <a href="mailto:info@nourishhaven.com" className="text-gray-300 hover:text-white flex items-center">
              <Mail size={16} className="mr-1" />
              info@nourishhaven.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
