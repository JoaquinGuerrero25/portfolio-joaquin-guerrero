import React, { useState } from 'react';

const Navbar = ({ toggleTheme, isDarkMode, changeLanguage, currentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  // Determine the label and language to switch based on the current language
  const languageLabel = currentLanguage === 'es' ? 'Inglés' : 'Español';
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

  // Toggle menu visibility
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="h-[75px] w-full border">
      <nav className="flex justify-between items-center px-4 py-2 relative">
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden p-2 bg-gray-200 dark:bg-gray-800 rounded transition-colors duration-500 ease-in-out"
          onClick={handleMenuToggle}
        >
          Menu
        </button>

        {/* Theme toggle button (always visible) */}
        <button
          className="hidden lg:block p-2 bg-gray-200 dark:bg-gray-800 rounded transition-colors duration-500 ease-in-out"
          onClick={toggleTheme}
        >
          {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>

        {/* Language toggle button (always visible) */}
        <button
          className="hidden lg:block p-2 bg-gray-200 dark:bg-gray-800 rounded transition-colors duration-500 ease-in-out"
          onClick={() => changeLanguage(newLanguage)}
        >
          {languageLabel}
        </button>

        {/* Mobile Menu (Hidden by default, visible when `isMenuOpen` is true) */}
        <div
          className={`lg:hidden fixed z-50 top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-start p-4 space-y-2">
            <button
              className="w-full p-2 text-left border-b hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={toggleTheme}
            >
              {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
            <button
              className="w-full p-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={() => changeLanguage(newLanguage)}
            >
              {languageLabel}
            </button>
            <button
              className="w-full p-2 text-left border-t border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={handleMenuToggle} // Close the menu
            >
              Cerrar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
