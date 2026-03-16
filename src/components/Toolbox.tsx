import { motion } from 'motion/react';
import { Wrench, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface ToolboxProps {
  onStartAssessment: () => void;
}

export default function Toolbox({ onStartAssessment }: ToolboxProps) {
  const tools = [
    {
      name: "Business Health Check",
      description: "Get your readiness score in 8 minutes",
      pillar: "All",
      status: "Available Now",
      action: onStartAssessment
    },
    {
      name: "Owner Dependency Mapper",
      description: "Visualise exactly where you're the bottleneck",
      pillar: "Owner Independence",
      status: "Coming Soon"
    },
    {
      name: "Revenue Quality Analyser",
      description: "Upload your revenue data and see it through a buyer's eyes",
      pillar: "Revenue Quality",
      status: "Coming Soon"
    },
    {
      name: "Customer Concentration Calculator",
      description: "How exposed are you to client loss?",
      pillar: "Revenue Quality",
      status: "Coming Soon"
    },
    {
      name: "Growth Narrative Builder",
      description: "AI helps you craft the investment story buyers want to hear",
      pillar: "Growth Story",
      status: "Coming Soon"
    },
    {
      name: "Process Documentation Kickstarter",
      description: "Turn your workflows into SOPs in minutes with AI",
      pillar: "Operational Resilience",
      status: "Coming Soon"
    },
    {
      name: "Financial Health Scorecard",
      description: "Understand your numbers the way an acquirer would",
      pillar: "Financial Clarity",
      status: "Coming Soon"
    },
    {
      name: "Valuation Range Estimator",
      description: "Get a rough sense of what your business could be worth",
      pillar: "All",
      status: "Coming Soon"
    },
    {
      name: "Exit Readiness Roadmap",
      description: "A personalised 12-month plan to increase your business value",
      pillar: "All",
      status: "Coming Soon"
    }
  ];

  const getPillarColor = (pillar: string) => {
    switch (pillar) {
      case 'Owner Independence': return 'bg-blue-100 text-blue-800';
      case 'Revenue Quality': return 'bg-purple-100 text-purple-800';
      case 'Growth Story': return 'bg-pink-100 text-pink-800';
      case 'Operational Resilience': return 'bg-orange-100 text-orange-800';
      case 'Financial Clarity': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#9d7c4f]/10 rounded-full mb-4">
            <Wrench className="w-8 h-8 text-[#9d7c4f]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03481d] mb-4">AI Toolbox</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A suite of AI-powered tools designed to help you measure, manage, and maximise the value of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => {
            const isAvailable = tool.status === "Available Now";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={isAvailable ? tool.action : undefined}
                className={`relative bg-white rounded-2xl p-8 border ${
                  isAvailable 
                    ? 'border-[#9d7c4f]/30 shadow-md hover:shadow-lg hover:border-[#9d7c4f] cursor-pointer' 
                    : 'border-gray-200 shadow-sm opacity-80 cursor-not-allowed'
                } transition-all duration-300 group flex flex-col h-full`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPillarColor(tool.pillar)}`}>
                    {tool.pillar}
                  </span>
                  {isAvailable ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9d7c4f]/10 text-[#9d7c4f]">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      <Clock className="w-3 h-3 mr-1" /> Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${isAvailable ? 'text-[#03481d]' : 'text-gray-700'}`}>
                  {tool.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {tool.description}
                </p>

                {isAvailable && (
                  <div className="mt-auto flex items-center text-sm font-semibold text-[#9d7c4f] group-hover:text-[#8a6b42] transition-colors">
                    Launch Tool <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
