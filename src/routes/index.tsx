import { createHashRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AppPlaceholder from '../pages/AppPlaceholder';

const appRoutes = [
  { path: 'resume', title: 'Resume' },
  { path: 'projects', title: 'Projects' },
  { path: 'skills', title: 'Skills' },
  { path: 'media', title: 'Media' },
  { path: 'contact', title: 'Contact' },
  { path: 'maps', title: 'Maps' },
  { path: 'settings', title: 'Settings' },
];

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p>Infotainment goes here</p>,
      },
      ...appRoutes.map(({ path, title }) => ({
        path,
        element: <AppPlaceholder title={title} />,
      })),
    ],
  },
]);

export default router; 