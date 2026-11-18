import { createHashRouter } from 'react-router-dom';
import AppWindow from '../infotainment/AppWindow';
import { infotainmentApps } from '../infotainment/apps';
import Launcher from '../infotainment/Launcher';
import MainLayout from '../layouts/MainLayout';
import AppPlaceholder from '../pages/AppPlaceholder';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Launcher />,
      },
      ...infotainmentApps.map(({ path, title }) => ({
        path: path.slice(1),
        element: (
          <AppWindow title={title}>
            <AppPlaceholder title={title} />
          </AppWindow>
        ),
      })),
    ],
  },
]);

export default router; 