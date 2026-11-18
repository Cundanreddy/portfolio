import React from 'react';
import { Outlet } from 'react-router-dom';
import CockpitStage from '../cockpit/CockpitStage';

const MainLayout: React.FC = () => {
  return (
    <CockpitStage>
      <Outlet />
    </CockpitStage>
  );
};

export default MainLayout; 