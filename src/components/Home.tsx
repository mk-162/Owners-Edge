import { ClipboardList, BarChart3, Rocket, ArrowRight, ShieldCheck, TrendingUp, Users, Settings, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onStartAssessment: () => void;
}

export default function Home({ onStartAssessment }: HomeProps) {
  const pillars = [
    { icon: <Users className="w-6 h-6" />, name: 'Owner Independence', desc: 'Could this business run without you?' },
    { icon: <TrendingUp className="w-6 h-6" />, name: 'Revenue Quality', desc: 'How predictable is your income?' },
    { icon: <Rocket className="w-6 h-6" />, name: 'Growth Story', desc: 'What\'s the obvious next chapter?' },
    { icon: <Settings className="w-6 h-6" />, name: 'Operational Resilience', desc: 'What happens when things go wrong?' },
    { icon: <FileText className="w-6 h-6" />, name: 'Financial Clarity', desc: 'Can you show clean, reliable numbers?' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="relative bg-[#03481d] text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03481d] via-[#03481d] to-[#2b6db1]/20 z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/office/1920/1080?blur=4')] bg-cover bg-center mix-blend-overlay z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            How ready is your business for its next chapter?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 mb-10"
          >
            Whether you're thinking about selling next year or just want to build a stronger company, The Owner's Edge gives you the free tools and insights that used to cost thousands in advisory fees.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={onStartAssessment}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-lg text-white bg-[#9d7c4f] hover:bg-[#8a6b42] transition-colors duration-300"
            >
              Take the Free Assessment
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pillars Row */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={onStartAssessment}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#9d7c4f]/30 transition-all cursor-pointer group"
              >
                <div className="text-[#9d7c4f] mb-4 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-lg font-bold text-[#03481d] mb-2">{pillar.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#03481d]">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Get actionable insights in three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#9d7c4f]/10 rounded-full flex items-center justify-center text-[#9d7c4f] mb-6">
                <ClipboardList className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#03481d] mb-3">1. Answer 25 questions</h3>
              <p className="text-gray-600">Our AI-guided assessment takes about 8 minutes and covers the five things every buyer looks at.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#9d7c4f]/10 rounded-full flex items-center justify-center text-[#9d7c4f] mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#03481d] mb-3">2. Get your Readiness Score</h3>
              <p className="text-gray-600">See exactly where your business stands across five critical dimensions, with sector-specific benchmarks.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#9d7c4f]/10 rounded-full flex items-center justify-center text-[#9d7c4f] mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#03481d] mb-3">3. Build your action plan</h3>
              <p className="text-gray-600">Get personalised, prioritised recommendations to increase your business value — all free, no strings attached.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#9d7c4f]" />
            <span>Built on insights from 1,000+ business sales</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
          <div>Powered by Transworld Business Advisors</div>
          <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
          <div className="text-[#9d7c4f]">100% Free, No Sales Pitch</div>
        </div>
      </section>
    </motion.div>
  );
}
