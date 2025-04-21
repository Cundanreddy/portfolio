import React from 'react';
import AboutMe from '../components/AboutMe';

const Home: React.FC = () => {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center bg-[var(--color-background)]">
            <h1 className="text-4xl font-bold mb-4 text-[var(--color-text)]">Welcome to My Portfolio</h1>
            <div className="flex flex-col items-center justify-center">
              <AboutMe/>
            </div>
         </div>
      </div>
    </>
  );
};

export default Home; 