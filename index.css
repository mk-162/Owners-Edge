import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'assessment', label: 'ASSESSMENT' },
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'toolbox', label: 'TOOLBOX' },
    { id: 'resources', label: 'RESOURCES' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl tracking-tight text-[#03481d]">The Owner's Edge</span>
                <TrendingUp className="text-[#2b6db1] w-6 h-6" />
              </div>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5">by Transworld Business Advisors</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'text-[#9d7c4f]'
                    : 'text-gray-600 hover:text-[#03481d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#03481d] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-4 text-base font-semibold ${
                  currentSection === item.id
                    ? 'text-[#9d7c4f] bg-gray-50'
                    : 'text-gray-600 hover:text-[#03481d] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
