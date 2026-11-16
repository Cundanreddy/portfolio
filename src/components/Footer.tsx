import React from 'react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-background)] shadow-lg mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {profile.contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 text">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 