import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <section className='w-full max-w-7xl pb-4 mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <Outlet />
        </AuthProvider>
      </QueryClientProvider>
    </section>
  );
}

export default App;
