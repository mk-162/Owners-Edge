import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { pillars, questions } from '../data';
import { Download, Share2, ArrowRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface DashboardProps {
  answers: Record<number, number>;
  onExploreToolbox: () => void;
}

export default function Dashboard({ answers, onExploreToolbox }: DashboardProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  // Calculate scores
  const pillarScores = pillars.map(pillar => {
    const pillarQuestions = questions.filter(q => q.pillar === pillar.name);
    const score = pillarQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    return { name: pillar.name, score };
  });

  const totalPossible = questions.length * 4; // 25 * 4 = 100
  const totalScore = pillarScores.reduce((sum, p) => sum + p.score, 0);
  const percentageScore = Math.round((totalScore / totalPossible) * 100);

  useEffect(() => {
    let start = 0;
    const end = percentageScore;
    if (start === end) return;

    let totalMiliseconds = 1500;
    let incrementTime = (totalMiliseconds / end) * 2;

    let timer = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [percentageScore]);

  const getScoreColor = (score: number) => {
    if (score < 40) return '#313131'; // Dark Gray
    if (score <= 65) return '#f59e0b'; // Amber
    return '#9d7c4f'; // KBS Red
  };

  const getPillarColor = (score: number) => {
    if (score < 10) return '#313131'; // Dark Gray
    if (score <= 14) return '#f59e0b'; // Amber
    return '#9d7c4f'; // KBS Red
  };

  const getPillarInterpretation = (score: number) => {
    if (score < 10) return "Significant risk area. Your business is highly vulnerable here, which will severely impact valuation and buyer interest. Immediate action required.";
    if (score <= 14) return "Moderate risk. You've made progress, but there are clear areas for improvement before going to market. Focus on systematising these elements.";
    return "Strong asset. This is a key selling point for your business. Maintain this standard and ensure you can clearly demonstrate it to buyers.";
  };

  const radarData = {
    labels: pillars.map(p => p.name),
    datasets: [
      {
        label: 'Your Score',
        data: pillarScores.map(p => p.score),
        backgroundColor: 'rgba(157, 124, 79, 0.2)',
        borderColor: 'rgba(157, 124, 79, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(157, 124, 79, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(157, 124, 79, 1)',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        pointLabels: {
          font: { family: 'Montserrat', size: 12, weight: 'bold' as const },
          color: '#03481d',
        },
        ticks: {
          min: 0,
          max: 20,
          stepSize: 5,
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#03481d',
        titleFont: { family: 'Montserrat', size: 13 },
        bodyFont: { family: 'Montserrat', size: 14, weight: 'bold' as const },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context: any) => `Score: ${context.raw}/20`,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03481d] mb-4">Your Readiness Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your answers, here is a detailed breakdown of your business's current sellability and value drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Overall Score & Benchmarks */}
          <div className="lg:col-span-1 space-y-8">
            {/* Overall Score Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Overall Readiness</h2>
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={getScoreColor(percentageScore)}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * percentageScore) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-5xl font-extrabold text-[#03481d]">{animatedScore}</span>
                  <span className="text-sm font-medium text-gray-500 mt-1">out of 100</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600 font-medium">
                {percentageScore < 40 ? "High Risk. Significant work needed before exit." : 
                 percentageScore <= 65 ? "Moderate Readiness. Good foundation, clear gaps." : 
                 "Exit Ready. Strong position for premium valuation."}
              </p>
            </div>

            {/* Benchmark Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#03481d] mb-6">Where you stand</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-600">Your Score</span>
                    <span className="text-[#03481d]">{percentageScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${percentageScore}%`, backgroundColor: getScoreColor(percentageScore) }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-600">UK Average</span>
                    <span className="text-gray-500">52/100</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{ width: '52%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-600">Exit Ready Threshold</span>
                    <span className="text-[#9d7c4f]">75/100</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#9d7c4f] h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Radar Chart & Pillar Breakdown */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Radar Chart Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#03481d]">Value Drivers Analysis</h3>
                <div className="flex items-center text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <Info className="w-3 h-3 mr-1" /> Powered by AI
                </div>
              </div>
              <div className="h-[400px] w-full relative">
                <Radar data={radarData} options={radarOptions} />
              </div>
            </div>

            {/* Pillar Breakdown Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#03481d] mb-4">Detailed Breakdown</h3>
              {pillarScores.map((pillar, idx) => {
                const color = getPillarColor(pillar.score);
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center mb-2 md:mb-0">
                        {pillar.score >= 15 ? (
                          <CheckCircle className="w-5 h-5 mr-3" style={{ color }} />
                        ) : (
                          <AlertTriangle className="w-5 h-5 mr-3" style={{ color }} />
                        )}
                        <h4 className="text-lg font-bold text-[#03481d]">{pillar.name}</h4>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl font-extrabold mr-2" style={{ color }}>{pillar.score}</span>
                        <span className="text-sm text-gray-400 font-medium">/ 20</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                      <div className="h-1.5 rounded-full" style={{ width: `${(pillar.score / 20) * 100}%`, backgroundColor: color }} />
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {getPillarInterpretation(pillar.score)}
                    </p>
                    
                    <button 
                      onClick={onExploreToolbox}
                      className="text-sm font-semibold text-[#9d7c4f] hover:text-[#8a6b42] flex items-center transition-colors"
                    >
                      Explore Improvements <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onExploreToolbox}
            className="w-full sm:w-auto px-8 py-4 bg-[#03481d] text-white rounded-xl font-semibold shadow-md hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            Want to dive deeper?
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button 
            onClick={() => window.print()}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#03481d] border border-gray-200 rounded-xl font-semibold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </button>
          <button 
            onClick={() => alert('Share functionality would open a native share dialog or copy link.')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#03481d] border border-gray-200 rounded-xl font-semibold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Score
          </button>
        </div>

      </div>
    </motion.div>
  );
}
