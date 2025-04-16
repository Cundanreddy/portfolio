import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
