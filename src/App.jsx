import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <section className='w-full max-w-7xl pb-4 mx-auto'>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
