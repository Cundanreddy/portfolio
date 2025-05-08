import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
    <div className="hidden lg:block">
     
    <nav className="bg-[var(--color-background)] basis-1/3 shadow-lg border ring-1 ring-cyan-50/50 shadow-cyan-50/50 rounded-xl border-[var(--color-border)]">
      
      <div className="max-w-7xl   lg:px-8">
        
        <div className="flex justify-space-between items-center h-16">
          
           
            <div className="hidden sm:ml-6 sm:mr-6 sm:flex sm:space-x-8">
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
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar; 