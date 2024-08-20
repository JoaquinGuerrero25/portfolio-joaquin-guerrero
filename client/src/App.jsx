import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './i18n';
import Navbar from './components/Navbar';
import PersonalProfile from './components/PersonalProfile';
import AboutMe from './components/AboutMe';

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { ref: personalProfileRef, inView: personalProfileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 ease-in-out">
      <Navbar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        changeLanguage={changeLanguage}
        currentLanguage={i18n.language}
      />
      <motion.div
        ref={personalProfileRef}
        initial={{ opacity: 0, y: -50 }}
        animate={personalProfileInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <PersonalProfile />
      </motion.div>
      <motion.div
        ref={aboutMeRef}
        initial={{ opacity: 0, y: -50 }}
        animate={aboutMeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <AboutMe />
      </motion.div>
    </div>
  );
}

export default App;
