import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main>
        <div className="full-w mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 