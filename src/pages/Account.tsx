
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, Heart, Package, ShoppingBag, LogOut, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock account data
const accountData = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  orders: [
    {
      id: "ORD-12345",
      date: "May 5, 2025",
      status: "Delivered",
      total: 124.95,
      items: 3
    },
    {
      id: "ORD-12344",
      date: "April 22, 2025",
      status: "Delivered",
      total: 89.99,
      items: 2
    },
    {
      id: "ORD-12343",
      date: "March 15, 2025",
      status: "Delivered",
      total: 45.50,
      items: 1
    }
  ],
  wishlist: [
    {
      id: 1,
      name: "Premium Plant Protein",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Marine Collagen Peptides",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1606937295546-46b297659883?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]
};

// Login form component
const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate login (for demo purposes)
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to NourishHaven!"
      });
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
            required
          />
          <div className="text-right mt-2">
            <a href="#forgot-password" className="text-sm text-brand-green hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account? <a href="#register" className="text-brand-green hover:underline">Create one</a>
          </p>
        </div>
      </form>
    </div>
  );
};

// Main Account component
const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // For demonstration purposes
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('profile');
  };
  
  if (!isLoggedIn) {
    return (
      <main className="bg-brand-light py-12">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <LoginForm onSuccess={handleLogin} />
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="bg-brand-light py-12">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-4">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-gray-50 p-6 border-r border-gray-200">
              <div className="flex items-center mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={accountData.user.avatar} 
                    alt={accountData.user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{accountData.user.name}</h3>
                  <p className="text-sm text-gray-500">{accountData.user.email}</p>
                </div>
              </div>
              
              <nav>
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')} 
                      className={`flex items-center w-full px-4 py-3 rounded-md ${
                        activeTab === 'profile' 
                          ? 'bg-brand-green/10 text-brand-green' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <User size={18} className="mr-2" />
                      Profile
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('orders')} 
                      className={`flex items-center w-full px-4 py-3 rounded-md ${
                        activeTab === 'orders' 
                          ? 'bg-brand-green/10 text-brand-green' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Package size={18} className="mr-2" />
                      Orders
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('wishlist')} 
                      className={`flex items-center w-full px-4 py-3 rounded-md ${
                        activeTab === 'wishlist' 
                          ? 'bg-brand-green/10 text-brand-green' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Heart size={18} className="mr-2" />
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('settings')} 
                      className={`flex items-center w-full px-4 py-3 rounded-md ${
                        activeTab === 'settings' 
                          ? 'bg-brand-green/10 text-brand-green' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Settings size={18} className="mr-2" />
                      Settings
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={handleLogout} 
                      className="flex items-center w-full px-4 py-3 rounded-md hover:bg-gray-100 text-gray-700"
                    >
                      <LogOut size={18} className="mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3 p-8">
              {/* Profile */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Profile</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={accountData.user.avatar} 
                          alt={accountData.user.name} 
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-sm transition-opacity">
                          Change Photo
                        </button>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold">{accountData.user.name}</h3>
                        <p className="text-gray-500">{accountData.user.email}</p>
                        <p className="text-brand-green mt-2">Premium Member</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                          <input 
                            type="text" 
                            value={accountData.user.name} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Email Address</label>
                          <input 
                            type="email" 
                            value={accountData.user.email} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                          <input 
                            type="tel" 
                            placeholder="Add phone number" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Shipping Address</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Address Line 1</label>
                          <input 
                            type="text" 
                            placeholder="Enter your street address" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">City</label>
                            <input 
                              type="text" 
                              placeholder="City" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
                            <input 
                              type="text" 
                              placeholder="Zip Code" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              )}
              
              {/* Orders */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Orders</h2>
                  
                  {accountData.orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-gray-200">
                            <th className="pb-3 font-semibold">Order ID</th>
                            <th className="pb-3 font-semibold">Date</th>
                            <th className="pb-3 font-semibold">Status</th>
                            <th className="pb-3 font-semibold">Total</th>
                            <th className="pb-3 font-semibold">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {accountData.orders.map(order => (
                            <tr key={order.id} className="border-b border-gray-200">
                              <td className="py-4 font-medium">{order.id}</td>
                              <td className="py-4 text-gray-600">{order.date}</td>
                              <td className="py-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4">${order.total.toFixed(2)}</td>
                              <td className="py-4">
                                <a href={`#order/${order.id}`} className="text-brand-green hover:underline">
                                  View Details
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <ShoppingBag size={48} className="text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
                      <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                      <Link to="/shop" className="btn-primary">
                        Start Shopping
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                  
                  {accountData.wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {accountData.wishlist.map(item => (
                        <div key={item.id} className="flex border border-gray-200 rounded-lg overflow-hidden">
                          <div className="w-1/3 bg-gray-100">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-2/3 p-4">
                            <h3 className="font-semibold mb-1">{item.name}</h3>
                            <p className="text-brand-green mb-4">${item.price}</p>
                            <div className="flex space-x-2">
                              <button className="bg-brand-green text-white px-3 py-1 rounded-md text-sm hover:bg-opacity-90 transition-colors">
                                Add to Cart
                              </button>
                              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <Heart size={48} className="text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Your Wishlist is Empty</h3>
                      <p className="text-gray-600 mb-6">Save items you like for future reference.</p>
                      <Link to="/shop" className="btn-primary">
                        Browse Products
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Settings */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-8">
                    {/* Password */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Current Password</label>
                          <input 
                            type="password" 
                            placeholder="Enter current password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">New Password</label>
                          <input 
                            type="password" 
                            placeholder="Enter new password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
                          <input 
                            type="password" 
                            placeholder="Confirm new password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                          />
                        </div>
                        <div>
                          <button className="btn-primary">Update Password</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Notifications */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-gray-500">Receive updates about your orders</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Promotional Emails</h4>
                            <p className="text-sm text-gray-500">Receive offers and promotions</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">SMS Notifications</h4>
                            <p className="text-sm text-gray-500">Receive order updates via SMS</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Delete Account */}
                    <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                      <h3 className="font-semibold mb-2">Delete Account</h3>
                      <p className="text-gray-600 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
