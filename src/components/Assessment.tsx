import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, pillars, Pillar } from '../data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface AssessmentProps {
  onComplete: (answers: Record<number, number>) => void;
  initialAnswers?: Record<number, number>;
}

export default function Assessment({ onComplete, initialAnswers = {} }: AssessmentProps) {
  const [answers, setAnswers] = useState<Record<number, number>>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const currentPillarInfo = pillars.find(p => p.name === currentQuestion.pillar);
  
  const totalQuestions = questions.length;
  const progress = ((currentIndex) / totalQuestions) * 100;

  // Group questions by pillar to show pillar intro
  const isFirstOfPillar = currentIndex === 0 || questions[currentIndex - 1].pillar !== currentQuestion.pillar;

  const handleAnswer = (score: number) => {
    if (isTransitioning) return;
    
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);
    setIsTransitioning(true);

    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onComplete(newAnswers);
      }
      setIsTransitioning(false);
    }, 400);
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
            <span className="uppercase tracking-wider text-[#9d7c4f]">{currentQuestion.pillar}</span>
            <span>{currentIndex + 1} of {totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div 
              className="bg-[#9d7c4f] h-2.5 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-6 h-8">
          {currentIndex > 0 && (
            <button 
              onClick={handleBack}
              className="flex items-center text-sm text-gray-500 hover:text-[#03481d] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </button>
          )}
        </div>

        {/* Question Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              {isFirstOfPillar && currentPillarInfo && (
                <div className="mb-8 pb-8 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-[#9d7c4f] uppercase tracking-widest mb-2">
                    Pillar: {currentPillarInfo.name}
                  </h2>
                  <h3 className="text-2xl font-bold text-[#03481d] mb-3">
                    {currentPillarInfo.keyQuestion}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {currentPillarInfo.description}
                  </p>
                </div>
              )}

              <h4 className="text-xl md:text-2xl font-semibold text-[#03481d] mb-8 leading-snug">
                {currentQuestion.text}
              </h4>

              <div className="space-y-4 mt-auto">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.score;
                  const letters = ['A', 'B', 'C', 'D'];
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.score)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center group ${
                        isSelected 
                          ? 'border-[#9d7c4f] bg-[#9d7c4f]/5 shadow-sm' 
                          : 'border-gray-100 hover:border-[#9d7c4f]/50 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-4 font-bold text-sm transition-colors ${
                        isSelected 
                          ? 'bg-[#9d7c4f] text-white' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-[#9d7c4f]/20 group-hover:text-[#9d7c4f]'
                      }`}>
                        {letters[idx]}
                      </div>
                      <span className={`text-base font-medium flex-grow ${isSelected ? 'text-[#03481d]' : 'text-gray-700'}`}>
                        {option.text}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-6 h-6 text-[#9d7c4f] ml-4 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
