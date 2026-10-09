/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioMain() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('general');

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleSelectService = (serviceKey: string) => {
    setSelectedService(serviceKey);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500/20 selection:text-sky-600 dark:selection:text-sky-300">
      {/* Top Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Showcase & Case Studies */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Services & Solutions */}
        <Services onSelectService={handleSelectService} />

        {/* Education & Accreditations */}
        <Education />

        {/* Contact Section */}
        <Contact selectedServiceKey={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioMain />
      </LanguageProvider>
    </ThemeProvider>
  );
}
