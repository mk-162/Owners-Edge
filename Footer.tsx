/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Assessment from './components/Assessment';
import Dashboard from './components/Dashboard';
import LeadCapture from './components/LeadCapture';
import Toolbox from './components/Toolbox';
import Resources from './components/Resources';
import Footer from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<number, number>>({});

  // Load answers from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('ownersEdgeAnswers');
    if (savedAnswers) {
      try {
        setAssessmentAnswers(JSON.parse(savedAnswers));
      } catch (e) {
        console.error("Failed to parse saved answers", e);
      }
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(assessmentAnswers).length > 0) {
      localStorage.setItem('ownersEdgeAnswers', JSON.stringify(assessmentAnswers));
    }
  }, [assessmentAnswers]);

  const handleStartAssessment = () => {
    setCurrentSection('assessment');
    window.scrollTo(0, 0);
  };

  const handleAssessmentComplete = (answers: Record<number, number>) => {
    setAssessmentAnswers(answers);
    setCurrentSection('lead-capture');
    window.scrollTo(0, 0);
  };

  const handleLeadCaptureComplete = () => {
    setCurrentSection('dashboard');
    window.scrollTo(0, 0);
  };

  const handleExploreToolbox = () => {
    setCurrentSection('toolbox');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="flex-grow">
        {currentSection === 'home' && (
          <Home onStartAssessment={handleStartAssessment} />
        )}
        {currentSection === 'assessment' && (
          <Assessment 
            onComplete={handleAssessmentComplete} 
            initialAnswers={assessmentAnswers} 
          />
        )}
        {currentSection === 'lead-capture' && (
          <LeadCapture onComplete={handleLeadCaptureComplete} />
        )}
        {currentSection === 'dashboard' && (
          <Dashboard 
            answers={assessmentAnswers} 
            onExploreToolbox={handleExploreToolbox} 
          />
        )}
        {currentSection === 'toolbox' && (
          <Toolbox onStartAssessment={handleStartAssessment} />
        )}
        {currentSection === 'resources' && (
          <Resources />
        )}
      </main>

      <Footer setCurrentSection={setCurrentSection} />
    </div>
  );
}

