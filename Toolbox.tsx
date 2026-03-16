import { TrendingUp } from 'lucide-react';

interface FooterProps {
  setCurrentSection: (section: string) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'toolbox', label: 'Toolbox' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Logo Area */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-xl tracking-tight text-[#03481d]">The Owner's Edge</span>
              <TrendingUp className="text-[#2b6db1] w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">by Transworld Business Advisors</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-[#9d7c4f] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2026 Transworld Business Advisors.<br />All rights reserved.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
            This platform provides general business insights and is not financial or legal advice. For personalised guidance, speak with a qualified advisor.
          </p>
        </div>
      </div>
    </footer>
  );
}
