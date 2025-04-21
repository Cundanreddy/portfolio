import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
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