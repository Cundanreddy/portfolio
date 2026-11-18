import React from 'react';
import { Outlet } from 'react-router-dom';
import CockpitStage from '../cockpit/CockpitStage';
import InfotainmentShell from '../infotainment/InfotainmentShell';
import { InfotainmentProvider } from '../infotainment/InfotainmentProvider';

const MainLayout: React.FC = () => {
  return (
    <InfotainmentProvider>
      <CockpitStage>
        <InfotainmentShell>
          <Outlet />
        </InfotainmentShell>
      </CockpitStage>
    </InfotainmentProvider>
  );
};

export default MainLayout; 