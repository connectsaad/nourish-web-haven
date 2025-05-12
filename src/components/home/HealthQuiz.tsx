
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const HealthQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const { toast } = useToast();
  
  const questions = [
    {
      question: "What's your primary health goal?",
      options: ["Energy & Vitality", "Sleep Quality", "Immune Support", "Stress Management"]
    },
    {
      question: "How active are you on a weekly basis?",
      options: ["Very Active", "Moderately Active", "Occasionally Active", "Rarely Active"]
    },
    {
      question: "What's your age range?",
      options: ["18-29", "30-45", "46-60", "61+"]
    }
  ];
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Quiz completed
      toast({
        title: "Quiz Completed!",
        description: "We'll prepare personalized recommendations for you.",
      });
      
      // Reset quiz
      setTimeout(() => {
        setStep(0);
        setAnswers([]);
      }, 1500);
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Discover Your Optimal Health Path</h2>
          <p className="text-center text-gray-600 mb-10">Take our quick quiz to receive personalized supplement recommendations</p>
          
          <div className="bg-brand-light rounded-2xl p-8 shadow-md">
            {/* Progress indicator */}
            <div className="flex mb-8">
              {questions.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 flex-1 mx-1 rounded-full transition-all duration-300 ${
                    index <= step ? 'bg-brand-green' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            
            {/* Question */}
            <h3 className="text-xl font-semibold mb-6">{questions[step].question}</h3>
            
            {/* Answer options */}
            <div className="space-y-4">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-brand-green hover:bg-brand-green/5 transition-all flex justify-between items-center"
                >
                  <span>{option}</span>
                  <span className="w-6 h-6 rounded-full border border-gray-300 flex-shrink-0"></span>
                </button>
              ))}
            </div>
            
            {/* Skip option */}
            <div className="mt-6 text-center">
              <Link to="/shop" className="text-sm text-gray-500 hover:text-brand-green">
                Skip quiz and browse all products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthQuiz;
