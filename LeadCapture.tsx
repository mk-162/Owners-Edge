import { motion } from 'motion/react';
import { BookOpen, ArrowRight, Mail } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: '"Built to Sell" Framework',
      description: "John Warrillow's 8 drivers of company value — and how to apply them to your business.",
      tag: "Framework",
      link: "#"
    },
    {
      title: '"The E-Myth" Principles',
      description: "Michael Gerber's approach to building systems that let your business run without you.",
      tag: "Methodology",
      link: "#"
    },
    {
      title: '"Traction / EOS"',
      description: "Gino Wickman's Entrepreneurial Operating System for structured, scalable growth.",
      tag: "Operating System",
      link: "#"
    },
    {
      title: "Understanding Multiples",
      description: "How buyers calculate what your business is worth — and what drives premiums.",
      tag: "Valuation Guide",
      link: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#9d7c4f]/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-[#9d7c4f]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03481d] mb-4">Learn From the Best Exit Planning Thinking</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've distilled insights from the leading frameworks on building valuable, sellable businesses.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 uppercase tracking-wider">
                  {resource.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#03481d] mb-3 group-hover:text-[#9d7c4f] transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {resource.description}
              </p>
              <a 
                href={resource.link}
                className="inline-flex items-center text-sm font-semibold text-[#9d7c4f] hover:text-[#8a6b42] transition-colors mt-auto"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#03481d] rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#03481d] via-[#03481d] to-[#2b6db1]/20 z-0" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/abstract/1920/1080?blur=4')] bg-cover bg-center mix-blend-overlay z-0" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-[#9d7c4f] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get monthly insights on building a more valuable business</h2>
            <p className="text-gray-300 mb-8">Join thousands of business owners receiving actionable advice straight to their inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d7c4f]"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#9d7c4f] text-white font-semibold rounded-xl hover:bg-[#8a6b42] transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              No spam. Unsubscribe anytime. We'll never share your email.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
