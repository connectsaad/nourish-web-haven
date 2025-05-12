
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

// Mock cart data
const cartData = [
  {
    id: 1,
    name: "Premium Plant Protein",
    price: 49.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Marine Collagen Peptides",
    price: 39.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1606937295546-46b297659883?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartData);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Calculate discount (20% if promo applied)
  const discount = promoApplied ? subtotal * 0.2 : 0;
  
  // Calculate shipping (free if subtotal > $50, otherwise $5.99)
  const shipping = subtotal > 50 ? 0 : 5.99;
  
  // Calculate total
  const total = subtotal - discount + shipping;
  
  // Update quantity
  const updateQuantity = (id: number, amount: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setPromoApplied(true);
    }
  };
  
  return (
    <main className="bg-brand-light py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Cart Header - Desktop */}
                <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4">
                  <div className="col-span-6">
                    <h2 className="font-semibold">Product</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-semibold">Price</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-semibold">Quantity</h2>
                  </div>
                  <div className="col-span-2 text-right">
                    <h2 className="font-semibold">Total</h2>
                  </div>
                </div>
                
                {/* Cart Items */}
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 md:p-6">
                      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Product */}
                        <div className="flex items-center md:col-span-6 mb-4 md:mb-0">
                          <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)} 
                              className="text-sm text-red-500 flex items-center mt-1 hover:text-red-700"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
                          <div className="flex justify-between md:block">
                            <span className="text-sm font-medium md:hidden">Price:</span>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        {/* Quantity */}
                        <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
                          <div className="flex justify-between items-center md:justify-center">
                            <span className="text-sm font-medium md:hidden">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                className="px-2 py-1 text-gray-500 hover:text-brand-green"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button 
                                className="px-2 py-1 text-gray-500 hover:text-brand-green"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="md:col-span-2 md:text-right">
                          <div className="flex justify-between md:block">
                            <span className="text-sm font-medium md:hidden">Total:</span>
                            <span className="font-semibold text-brand-dark">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Continue Shopping */}
              <div className="mt-6">
                <Link to="/shop" className="text-brand-green hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (20%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>
                
                <div className="flex justify-between py-4 border-b border-gray-200">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-xl">${total.toFixed(2)}</span>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6 mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <button 
                      className="bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
                      onClick={applyPromoCode}
                      disabled={promoApplied}
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-sm text-green-600 mt-1">20% discount applied!</p>
                  )}
                  {!promoApplied && (
                    <p className="text-xs text-gray-500 mt-1">Try "SAVE20" for 20% off</p>
                  )}
                </div>
                
                <Link to="/checkout" className="btn-primary w-full text-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingBag size={64} className="text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
