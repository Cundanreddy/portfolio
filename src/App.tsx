import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
