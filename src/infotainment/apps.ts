import {
  FiBarChart2,
  FiBriefcase,
  FiFileText,
  FiImage,
  FiMap,
  FiPhone,
  FiSettings,
  type IconType,
} from 'react-icons/fi';

export interface InfotainmentApp {
  path: string;
  title: string;
  Icon: IconType;
}

export const infotainmentApps: InfotainmentApp[] = [
  { path: '/resume', title: 'Resume', Icon: FiFileText },
  { path: '/projects', title: 'Projects', Icon: FiBriefcase },
  { path: '/skills', title: 'Skills', Icon: FiBarChart2 },
  { path: '/media', title: 'Media', Icon: FiImage },
  { path: '/contact', title: 'Phone', Icon: FiPhone },
  { path: '/maps', title: 'Maps', Icon: FiMap },
  { path: '/settings', title: 'Settings', Icon: FiSettings },
];
