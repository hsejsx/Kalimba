import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <section className='w-full max-w-7xl pb-4 mx-auto'>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </section>
  );
}

export default App;
