import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <main className="bg-white py-12">
      {/* Header */}
      <div className="bg-brand-light py-12 mb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We're here to help. Reach out to our team using the form below.
          </p>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                  <Mail className="text-brand-green" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <a href="mailto:info@nourishhaven.com" className="text-gray-600 hover:text-brand-green transition-colors">
                    info@nourishhaven.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                  <Phone className="text-brand-green" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-green transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                  <MapPin className="text-brand-green" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <address className="text-gray-600 not-italic">
                    123 Wellness Avenue<br />
                    Suite 200<br />
                    San Francisco, CA 94110
                  </address>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-light hover:bg-brand-green hover:text-white p-3 rounded-full transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-light hover:bg-brand-green hover:text-white p-3 rounded-full transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-light hover:bg-brand-green hover:text-white p-3 rounded-full transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-light hover:bg-brand-green hover:text-white p-3 rounded-full transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-brand-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Return/Refund">Return/Refund</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for an actual map implementation */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555687322!2d-122.50764016547293!3d37.75781499657613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1576897326815!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              title="NourishHaven Location Map"
            ></iframe>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-brand-light p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6">
            Find answers to common questions about our products, orders, shipping, and more.
          </p>
          <Link to="/faq" className="btn-secondary">
            View FAQs
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Contact;
