
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// Mock FAQ data
const faqData = [
  {
    category: "Product Information",
    questions: [
      {
        question: "Are your products organic?",
        answer: "Many of our products use organic ingredients, and these are clearly labeled. We prioritize high-quality ingredients that are sustainably sourced and thoroughly tested for purity and potency. Check the individual product pages for detailed information on each product's organic status."
      },
      {
        question: "Do your products contain allergens?",
        answer: "We make every effort to create products free from common allergens. All potential allergens are clearly listed on our product labels. Many of our products are free from gluten, dairy, soy, nuts, and other common allergens, but please check the specific product information or contact our customer service if you have specific allergy concerns."
      },
      {
        question: "Are your supplements third-party tested?",
        answer: "Yes, all our products undergo rigorous third-party testing for purity, potency, and quality. We work with certified laboratories to ensure that what's on the label is exactly what's in the bottle. Certificates of Analysis (COA) are available upon request."
      },
      {
        question: "How should I store my supplements?",
        answer: "For optimal potency and shelf life, store your supplements in a cool, dry place away from direct sunlight. Some products, like probiotics or certain oils, may require refrigeration after opening. Always check the product label for specific storage instructions."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Domestic orders typically ship within 1-2 business days and arrive within 3-7 business days, depending on your location. International shipping times vary by country, usually taking 7-14 business days. Once your order ships, you will receive a tracking number to monitor your delivery status."
      },
      {
        question: "Do you offer free shipping?",
        answer: "We offer free standard shipping on all domestic orders over $50. Orders under $50 have a flat shipping rate of $5.95. International shipping rates vary based on location and order size. Special promotions throughout the year may include free shipping offers regardless of order value."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs duties, taxes, or import fees that may apply based on your country's regulations."
      },
      {
        question: "Can I expedite my shipping?",
        answer: "Yes, expedited shipping options are available at checkout. For domestic orders, we offer 2-day and overnight shipping options. Expedited international shipping varies by country. Additional fees apply for expedited shipping services."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day satisfaction guarantee on all products. If you're not completely satisfied with your purchase, you can return the unused portion within 30 days of delivery for a full refund of the product price (excluding shipping costs). For damaged or defective items, we will cover the return shipping costs."
      },
      {
        question: "How do I initiate a return?",
        answer: "To initiate a return, please contact our customer service team at returns@nourishhaven.com or through our Contact Us page. You'll need to provide your order number and the reason for your return. Our team will guide you through the process and provide a return shipping label if applicable."
      },
      {
        question: "When will I receive my refund?",
        answer: "Once we receive and process your return (usually within 3-5 business days of receipt), your refund will be issued to your original payment method. Depending on your bank or credit card company, it may take an additional 5-10 business days for the refund to appear in your account."
      },
      {
        question: "Can I exchange a product instead of returning it?",
        answer: "Yes, we're happy to process exchanges. Contact our customer service team within 30 days of receiving your order, and we'll help you exchange your product for a different item. If there's a price difference, we'll either refund the difference or charge you accordingly with your approval."
      }
    ]
  },
  {
    category: "Subscription & Billing",
    questions: [
      {
        question: "How do I manage my subscription?",
        answer: "You can manage your subscription by logging into your account and navigating to the 'My Subscriptions' section. There, you can modify your product selection, change delivery frequency, skip deliveries, update payment information, or cancel your subscription at any time."
      },
      {
        question: "What are the benefits of subscribing?",
        answer: "Subscribers enjoy several benefits, including a 15% discount on all subscription products, free shipping on all orders, priority access to new product releases, exclusive subscriber-only promotions, and the convenience of automatic deliveries so you never run out of your favorite products."
      },
      {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time without penalties or fees. Log into your account, go to 'My Subscriptions', and select the cancel option. You can also contact our customer service team for assistance with cancellation."
      },
      {
        question: "When will I be billed for my subscription?",
        answer: "You'll be billed automatically when each subscription order processes, typically 2-3 days before your scheduled delivery date. You'll receive an email notification before each billing cycle so you have time to make any changes if needed."
      }
    ]
  },
  {
    category: "Usage & Dosage",
    questions: [
      {
        question: "How should I take your supplements?",
        answer: "Specific usage instructions are provided on each product label and product page. Generally, most supplements are best taken with food to improve absorption and minimize the potential for digestive discomfort. Always follow the recommended dosage unless directed otherwise by your healthcare provider."
      },
      {
        question: "Can I take multiple supplements together?",
        answer: "In most cases, our supplements can be safely taken together as they're designed to complement each other. However, we recommend consulting with a healthcare professional before combining multiple supplements, especially if you're taking prescription medications or have existing health conditions."
      },
      {
        question: "What is the best time of day to take supplements?",
        answer: "The optimal time depends on the specific supplement. Some are best taken in the morning (like B vitamins for energy), while others may be more effective when taken in the evening (like magnesium for relaxation). Check the product label for specific timing recommendations."
      },
      {
        question: "How long until I notice results?",
        answer: "Results vary depending on the product and your individual body chemistry. Some benefits may be noticed within days (like improved digestive function or energy), while others may take 2-3 months of consistent use (like skin health or joint support). Consistency is key for optimal results."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("Product Information");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };
  
  // Filter FAQs based on search
  const filteredFAQs = searchQuery
    ? faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqData;
  
  return (
    <main className="bg-brand-light py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          </div>
        </div>
        
        {/* FAQ Categories */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {faqData.map(category => (
              <button
                key={category.category}
                className={`px-5 py-2.5 rounded-full transition-colors ${
                  activeCategory === category.category
                    ? 'bg-brand-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>
        )}
        
        {/* FAQ Content */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.map(category => (
            <div 
              key={category.category} 
              className={searchQuery || activeCategory === category.category ? 'block' : 'hidden'}
            >
              {searchQuery && (
                <h2 className="text-xl font-semibold mb-4 mt-8">{category.category}</h2>
              )}
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggleQuestion(faq.question)}
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {openQuestions[faq.question] ? (
                        <ChevronUp className="text-brand-green" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                      )}
                    </button>
                    
                    <div className={`px-6 pb-4 ${openQuestions[faq.question] ? 'block' : 'hidden'}`}>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">No matching questions found</h3>
              <p className="text-gray-600">Try adjusting your search query or browse our FAQ categories.</p>
            </div>
          )}
        </div>
        
        {/* Contact section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help with any questions you might have.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
