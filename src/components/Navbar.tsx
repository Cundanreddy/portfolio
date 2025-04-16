import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-[var(--color-background)] shadow-lg border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
                My Portfolio
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--color-text)] hover:bg-[var(--color-border)] focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 