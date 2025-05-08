import React from 'react';
import AboutMe from '../components/AboutMe';
import { ContactMe } from '../components/ContactMe';
import { Projects } from '../components/Projects';

const Home: React.FC = () => {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center bg-[var(--color-background)]">
          <div className="flex flex-col gap-y-10 m-10 p-10">
            <h1 className="text-4xl font-bold m-4 text-[var(--color-text)]">Welcome</h1>
            <h1 className="text-4xl font-bold m-4 text-[var(--color-text)]">Myself Cundaneswara reddy</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AboutMe/> 
            <Projects/>
            <ContactMe/>
          </div>
         </div>
      </div>
    </>
  );
};

export default Home; 