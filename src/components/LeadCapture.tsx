import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';

interface LeadCaptureProps {
  onComplete: () => void;
}

export default function LeadCapture({ onComplete }: LeadCaptureProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your CRM or backend
    console.log('Lead captured:', formData);
    onComplete();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div>
          <div className="mx-auto h-12 w-12 bg-[#03481d]/10 rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-[#03481d]" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Your Results Are Ready
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your details below to unlock your personalized business valuation report and dashboard.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#9d7c4f] focus:border-[#9d7c4f] sm:text-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#9d7c4f] focus:border-[#9d7c4f] sm:text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#9d7c4f] focus:border-[#9d7c4f] sm:text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#9d7c4f] focus:border-[#9d7c4f] sm:text-sm"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#9d7c4f] focus:border-[#9d7c4f] sm:text-sm"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div className="flex items-center text-xs text-gray-500 mt-4">
            <ShieldCheck className="h-4 w-4 mr-1 text-green-600" />
            Your information is secure and will never be shared.
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#03481d] hover:bg-[#023314] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03481d] transition-colors shadow-md"
            >
              View My Results
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={onComplete}
            className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
          >
            Skip for demo purposes
          </button>
        </div>
      </div>
    </motion.div>
  );
}
